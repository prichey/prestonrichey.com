import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import BlogListing from './../components/BlogListing';

const BlogPageInner = props => {
  try {
    const posts = props.data.allMdx ? props.data.allMdx.edges : [];

    return <BlogListing posts={posts} />;
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any blog posts.</h2>;
  }
};

class BlogPage extends React.Component {
  render() {
    console.log('BlogPage', { props: this.props });
    return (
      <Layout>
        <BlogPageInner {...this.props} />
      </Layout>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query {
    allMdx(
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
