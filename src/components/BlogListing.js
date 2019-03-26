import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const DateSpan = styled.span`
  display: none;
  color: #999;
  margin-left: 0.5em;

  @media (min-width: 520px) {
    display: inline;
  }
`;

const StyledBlogListing = styled.ul`
  list-style: none;
`;

const StyledBlogItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledBlogLink = styled(Link)``;

const BlogListing = ({ posts }) => {
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
};

export default BlogListing;
