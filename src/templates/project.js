import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

const ProjectTemplate = ({ data }) => {
  const { frontmatter, code } = data.mdx;

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
      <TextPostBody>
        <MDXRenderer>{code.body}</MDXRenderer>
      </TextPostBody>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
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
