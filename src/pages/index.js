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

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <StyledContainer>
          <HeadScene />
        </StyledContainer>
      </Layout>
    );
    // return (
    //   <Layout>
    //     <StyledContainer>
    //       <Suspense fallback={<div />}>
    //         <HeadScene />
    //       </Suspense>
    //     </StyledContainer>
    //   </Layout>
    // );
  }
}

export default Index;
