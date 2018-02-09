import React from 'react';
import TextPostBody from './../components/TextPostBody';
import Helmet from 'react-helmet';

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
      <TextPostBody htmlAst={post.htmlAst} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
