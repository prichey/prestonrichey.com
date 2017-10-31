const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    const type = path.parse(slug).dir === '/projects' ? 'project' : 'post';
    createNodeField({
      node,
      name: 'type',
      value: type
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
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
      result.data.allMarkdownRemark.edges.map(({ node }) => {
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
