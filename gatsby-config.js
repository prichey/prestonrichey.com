module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components'
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // {
          //   resolve: 'gatsby-remark-component',
          //   options: { components: ['zoom-image', 'hidden', 'countup'] }
          // },
          {
            resolve: 'gatsby-remark-autolink-headers'
          },
          {
            resolve: 'gatsby-remark-prismjs'
          },
          {
            resolve: 'gatsby-remark-smartypants'
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/projects`
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'posts',
    //     path: `${__dirname}/src/pages/blog`
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'projects',
    //     path: `${__dirname}/src/pages/projects`
    //   }
    // },
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
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-autolink-headers' },
          { resolve: 'gatsby-remark-prismjs', options: {} },
          { resolve: 'gatsby-remark-smartypants' }
          // {
          //   resolve: 'gatsby-remark-copy-linked-files',
          //   options: {
          //     ignoreFileExtensions: []
          //   }
          // }
        ]
        // mdPlugins: [require('gatsby-remark-prismjs')]
      }
    }
  ]
};
