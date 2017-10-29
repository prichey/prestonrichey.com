import React from 'react';
import styled from 'styled-components';

const Blog = styled.div`color: red;`;

class BlogListing extends React.Component {
  render() {
    return (
      <Blog>
        <h1>Blog</h1>
      </Blog>
    );
  }
}

export default BlogListing;
