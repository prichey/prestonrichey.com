import React from 'react';
import styled from 'styled-components';

const StyledTextBody = styled.div`
  p {
    line-height: 1.5em;
  }
`;

class TextPostBody extends React.Component {
  render() {
    return (
      <StyledTextBody dangerouslySetInnerHTML={{ __html: this.props.html }} />
    );
  }
}

export default TextPostBody;
