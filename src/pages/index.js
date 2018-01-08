import React from 'react';
import styled from 'styled-components';

import Head from './../components/Head';

const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
`;

class Index extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Head />
      </StyledContainer>
    );
  }
}

export default Index;
