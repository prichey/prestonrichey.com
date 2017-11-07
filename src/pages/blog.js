import React from 'react';
import BlogListing from './../components/BlogListing';

class BlogPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return <BlogListing posts={posts} />;
  }
}

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "post" } } }
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
