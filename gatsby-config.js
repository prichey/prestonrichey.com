module.exports = {
  pathPrefix: '/prichey-gatsby',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs'
          },
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     // It's important to specify the maxWidth (in pixels) of
          //     // the content container as this plugin uses this as the
          //     // base for generating different widths of each image.
          //     maxWidth: 1200,
          //     // Remove the default behavior of adding a link to each
          //     // image.
          //     linkImagesToOriginal: false
          //   }
          // },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#0000ff'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-70108869-1'
      }
    },
    'gatsby-plugin-twitter'
  ]
};
