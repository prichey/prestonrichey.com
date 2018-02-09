import React from 'react';
import styled from 'styled-components';

const HiddenDiv = styled.div`
  display: none;
`;

class Hidden extends React.Component {
  render() {
    return <HiddenDiv />;
  }
}

export default Hidden;
