import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const DateSpan = styled.span`
  color: #999;
  margin-left: 0.5em;
`;

const StyledBlogListing = styled.ul`list-style: none;`;
const StyledBlogItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledBlogLink = styled(Link)``;

class BlogListing extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    console.log(posts);

    const postLinks = posts.map(post => {
      return (
        <StyledBlogItem key={post.node.fields.slug}>
          <StyledBlogLink to={post.node.fields.slug}>
            {post.node.frontmatter.title}
          </StyledBlogLink>
          <DateSpan>({post.node.frontmatter.date})</DateSpan>
        </StyledBlogItem>
      );
    });

    return <StyledBlogListing>{postLinks}</StyledBlogListing>;
  }
}

export default BlogListing;

export const query = graphql`
  query BlogListingQuery {
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
