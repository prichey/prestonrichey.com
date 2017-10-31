import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

class BlogListing extends React.Component {
  render() {
    return (
      <div>
        <h2>Blog</h2>
        <p>Links are hardcoded :(</p>
        <ul>
          <li>
            <Link to="/blog/test">Test</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BlogListing;

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
