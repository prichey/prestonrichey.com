import React from 'react';
import TextPostBody from './../components/TextPostBody';
// import ZoomImageFoo from './../components/ZoomImageFoo';
import ImageZoom from 'react-medium-image-zoom';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      {/* <ImageZoom
        image={{
          src: 'index.jpg',
          alt: 'hi'
        }}
        zoomImage={{
          src: 'index.jpg',
          alt: 'there'
        }}
      /> */}
      {/* <TextPostBody html={post.html} /> */}
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
