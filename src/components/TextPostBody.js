import React from 'react';
import styled from 'styled-components';

const StyledTextBody = styled.div`
  p {
    line-height: 1.5em;
  }
`;

const TextPostBody = ({ children }) => {
  return children ? <StyledTextBody>{children}</StyledTextBody> : null;
};

export default TextPostBody;
