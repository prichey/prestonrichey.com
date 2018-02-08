import React from 'react';
import styled from 'styled-components';

import HeadScene from './../components/HeadScene';

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

class Index extends React.Component {
  render() {
    return (
      <StyledContainer>
        <HeadScene />
      </StyledContainer>
    );
  }
}

export default Index;
