const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  try {
    if (node.internal.type === 'Mdx') {
      const { sourceInstanceName } = getNode(node.parent);

      let slug = '';
      switch (sourceInstanceName) {
        case 'projects':
          slug = createFilePath({
            node,
            getNode
          });

          createNodeField({
            node,
            name: 'slug',
            value: `/${sourceInstanceName}${slug}`
          });

          createNodeField({
            node,
            name: 'type',
            value: 'project'
          });

          const dirSplit = path.parse(slug).dir.split(path.sep);
          if (dirSplit.length > 0 && dirSplit[0] === '') {
            dirSplit.shift(); // because path starts with /, '' is always at position 0
          }

          if (dirSplit.length) {
            createNodeField({
              node,
              name: 'projectType',
              value: dirSplit[0]
            });
          } else {
            throw new Error('each project needs a type');
          }
          break;
        case 'posts':
          slug = createFilePath({
            node,
            getNode
          });

          createNodeField({
            node,
            name: 'slug',
            value: `/blog${slug}`
          });

          createNodeField({
            node,
            name: 'type',
            value: 'post'
          });
          break;
        case 'pages':
        default:
          slug = createFilePath({
            node,
            getNode,
            basePath: 'pages'
          });

          createNodeField({
            node,
            name: 'slug',
            value: slug
          });

          createNodeField({
            node,
            name: 'type',
            value: 'page'
          });
          break;
      }
    }
  } catch (e) {
    console.log({ e });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.error(result.errors);
        reject(result.errors);
      }

      result.data.allMdx.edges.forEach(({ node }) => {
        const templatePath =
          node.fields.type === 'project'
            ? './src/templates/project.js'
            : './src/templates/post.js';

        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

// exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
//   const config = getConfig();
//
//   const wasmExtensionRegExp = /\.wasm$/;
//
//   config.resolve.extensions.push('.wasm');
//
//   config.module.rules.forEach(rule => {
//     (rule.oneOf || []).forEach(oneOf => {
//       if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
//         // Make file-loader ignore WASM files
//         oneOf.exclude.push(wasmExtensionRegExp);
//       }
//     });
//   });
//
//   // Add a dedicated loader for Wasm
//   config.module.rules.push({
//     test: wasmExtensionRegExp,
//     include: path.resolve(__dirname, 'src'),
//     use: [{ loader: require.resolve('wasm-loader'), options: {} }]
//   });
//
//   // This will completely replace the webpack config with the modified object.
//   actions.replaceWebpackConfig(config);
// };
