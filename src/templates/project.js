import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      {post.frontmatter.title && (
        <Helmet>
          <title>Preston Richey | {post.frontmatter.title}</title>
        </Helmet>
      )}

      <h1>{post.frontmatter.title}</h1>
      <ProjectLinks
        link={post.frontmatter.link}
        repo={post.frontmatter.repo}
        date={post.frontmatter.date}
        lang={post.frontmatter.lang}
      />
      <TextPostBody htmlAst={post.htmlAst} />
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        link
        repo
        date
        lang
      }
    }
  }
`;
