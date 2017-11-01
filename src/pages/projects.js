import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const DateSpan = styled.span`
  color: #999;
  margin-left: 0.5em;
`;

const StyledProjectListing = styled.ul`list-style: none;`;
const StyledProjectItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledProjectLink = styled(Link)``;

class ProjectListing extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    console.log(posts);

    const postLinks = posts.map(post => {
      return (
        <StyledProjectItem key={post.node.fields.slug}>
          <StyledProjectLink to={post.node.fields.slug}>
            {post.node.frontmatter.title}
          </StyledProjectLink>
          <DateSpan>({post.node.frontmatter.date})</DateSpan>
        </StyledProjectItem>
      );
    });

    return <StyledProjectListing>{postLinks}</StyledProjectListing>;
  }
}

export default ProjectListing;

export const query = graphql`
  query ProjectListingQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "project" } } }
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
