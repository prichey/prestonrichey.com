import React from 'react';
import styled from 'styled-components';

const StyledAboutPage = styled.div`
  font-size: 1.8rem;
`;

class AboutPage extends React.Component {
  render() {
    return (
      <StyledAboutPage>
        <h1>🤠</h1>
      </StyledAboutPage>
    );
  }
}

export default AboutPage;
