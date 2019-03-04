import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

export default props => {
  return null;
  // const { frontmatter, children } = props.pageContext;
  // console.log('Project', { props, frontmatter });

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Preston Richey | {frontmatter.title}</title>
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <ProjectLinks
        link={frontmatter.link}
        repo={frontmatter.repo}
        date={frontmatter.date}
        lang={frontmatter.lang}
      />
    </Layout>
  );
};

// export const query = graphql`
//   query($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         link
//         repo
//         date
//         lang
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `;
