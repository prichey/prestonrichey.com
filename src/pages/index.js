import React from 'react';
import styled from 'styled-components';

const Index = styled.div`color: pink;`;

class IndexPage extends React.Component {
  render() {
    return (
      <Index>
        <h1>Index</h1>
      </Index>
    );
  }
}

export default IndexPage;
