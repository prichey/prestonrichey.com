import React from 'react';
import BlogListing from './../components/BlogListing';

class BlogPage extends React.Component {
  render() {
    try {
      const posts = this.props.data.allMarkdownRemark.edges;
      return <BlogListing posts={posts} />;
    } catch (e) {
      console.log(e);
      return <h2>Unable to find any blog posts.</h2>;
    }
  }
}

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "post" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
