import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
