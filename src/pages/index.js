import React from 'react';
import styled from 'styled-components';

import HeadScene from './../components/HeadScene';

const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
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
