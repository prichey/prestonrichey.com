import React from 'react';
import styled from 'styled-components';
import Script from 'react-load-script';

import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <ProjectLinks link={post.frontmatter.link} repo={post.frontmatter.repo} />
      <TextPostBody html={post.html} />

      {post.frontmatter.zoom === true && (
        <div>
          <link href="/zoom.css" rel="stylesheet" />
          <Script url="/zoom-bundle.min.js" />
        </div>
      )}

      {post.frontmatter.zoom !== true && (
        // idk why we get here
        <div>
          <link href="/zoom.css" rel="stylesheet" />
          <Script url="/zoom-bundle.min.js" />
        </div>
      )}
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
        zoom
      }
    }
  }
`;
