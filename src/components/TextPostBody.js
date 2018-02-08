import React from 'react';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';

import ZoomImageFoo from './ZoomImageFoo';
import Echo from './Echo';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'zoom-image': ZoomImageFoo, echo: Echo }
}).Compiler;

const StyledTextBody = styled.div`
  p {
    line-height: 1.5em;
  }
`;

class TextPostBody extends React.Component {
  render() {
    return (
      // <StyledTextBody dangerouslySetInnerHTML={{ __html: this.props.html }} />
      <StyledTextBody>{renderAst(this.props.htmlAst)}</StyledTextBody>
    );
  }
}

export default TextPostBody;
