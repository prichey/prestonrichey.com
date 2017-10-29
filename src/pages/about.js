import React from 'react';
import styled from 'styled-components';

const About = styled.div`color: blue;`;

class AboutPage extends React.Component {
  render() {
    return (
      <About>
        <h1>About</h1>
      </About>
    );
  }
}

export default AboutPage;
