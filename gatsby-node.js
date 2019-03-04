const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  try {
    if (node.internal.type === 'Mdx') {
      const fileNode = getNode(node.parent);
      const { sourceInstanceName } = fileNode;

      switch (sourceInstanceName) {
        case 'projects':
          const slug = createFilePath({
            node,
            getNode
          });

          createNodeField({
            node,
            name: 'slug',
            value: `/${sourceInstanceName}${slug}`
          });

          // if (type === 'project') {
          //   if (dirSplit.length > 1) {
          //     createNodeField({
          //       node,
          //       name: 'projectType',
          //       value: dirSplit[1]
          //     });
          //   } else {
          //     throw new Error('each project needs a type');
          //   }
          // }
          break;
        case 'posts':
          const slug = createFilePath({
            node,
            getNode
          });

          createNodeField({
            node,
            name: 'slug',
            value: `/blog${slug}`
          });
        case 'pages':
        default:
          const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages'
          });

          createNodeField({
            node,
            name: 'slug',
            value: slug
          });
          break;
      }

      // const dirSplit = path.parse(slug).dir.split(path.sep);
      // if (dirSplit.length > 0 && dirSplit[0] === '') {
      //   dirSplit.shift(); // because path starts with /, '' is always at position 0
      // }
      // console.log({ dirSplit });
      //
      // let type = 'page';
      // switch (dirSplit[0]) {
      //   case 'projects':
      //     type = 'project';
      //     break;
      //   case 'posts':
      //     type = 'post';
      //     break;
      // }
      //
      createNodeField({
        node,
        name: 'type',
        value: sourceInstanceName
      });
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
        console.log('shit');
        console.error(result.errors);
        reject(result.errors);
      }

      result.data.allMdx.edges.forEach(({ node }) => {
        console.log({ slug: node.fields.slug });
        const templatePath =
          node.fields.type === 'projects'
            ? './src/templates/project.js'
            : './src/templates/post.js';

        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
            // frontmatter: node.frontmatter,
            // html: node.html
          }
        });
      });
      resolve();
    });
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
