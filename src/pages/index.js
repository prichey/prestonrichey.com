import React from 'react';
import styled from 'styled-components';

import Layout from './../components/Layout';
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

const Index = () => (
  <Layout>
    <StyledContainer>
      <HeadScene />
    </StyledContainer>
  </Layout>
);

export default Index;
