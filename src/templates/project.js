import React from 'react';
import styled from 'styled-components';

import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <ProjectLinks link={post.frontmatter.link} repo={post.frontmatter.repo} />
      <TextPostBody html={post.html} />
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        repo
      }
    }
  }
`;
