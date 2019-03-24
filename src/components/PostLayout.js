import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
// import { graphql } from 'gatsby';

import Layout from './../components/Layout';
// import TextPostBody from './../components/TextPostBody';
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

export default props => {
  console.log('PostLayout.js', { props });
  return null;

  const frontmatter = props.pageContext.frontmatter;

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Preston Richey | {frontmatter.title}</title>
        </Helmet>
      )}
      {frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={frontmatter.title} />
          <meta name="twitter:title" content={frontmatter.title} />
        </Helmet>
      )}
      {frontmatter.excerpt && (
        <Helmet>
          <meta property="og:description" content={frontmatter.excerpt} />
          <meta name="twitter:description" content={frontmatter.excerpt} />
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      {props.children}
      <StyledPostDate>{frontmatter.date}</StyledPostDate>
    </Layout>
  );
};

// export const query = graphql`
//   query($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//         excerpt
//       }
//     }
//   }
// `;
