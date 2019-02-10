import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
// import ProjectLinks from './../components/ProjectLinks';

// const StyledTitleWrap = styled.div`
//   margin-bottom: 1em;
// `;

// const StyledTitle = styled.h1`
//   margin-bottom: 0;
// `;

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      {post.frontmatter.title && (
        <Helmet>
          <title>Preston Richey | {post.frontmatter.title}</title>
        </Helmet>
      )}

      {post.frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={post.frontmatter.title} />
          <meta name="twitter:title" content={post.frontmatter.title} />
        </Helmet>
      )}

      {post.frontmatter.excerpt && (
        <Helmet>
          <meta property="og:description" content={post.frontmatter.excerpt} />
          <meta name="twitter:description" content={post.frontmatter.excerpt} />
        </Helmet>
      )}

      <h1>{post.frontmatter.title}</h1>
      <TextPostBody htmlAst={post.htmlAst} />
      <StyledPostDate>{post.frontmatter.date}</StyledPostDate>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
        excerpt
      }
    }
  }
`;
