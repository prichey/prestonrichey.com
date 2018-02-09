import React from 'react';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';

// TODO: figure out if I can create the compiler function on the fly and include variable components, so I don't have to pass these in for posts that don't need them. this might get optimized out by Webpack on build, anyway, but not sure
import ZoomImage from './ZoomImage';
import Echo from './Echo';
import Hidden from './Hidden';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'zoom-image': ZoomImage, echo: Echo, hidden: Hidden }
}).Compiler;

const StyledTextBody = styled.div`
  p {
    line-height: 1.5em;
  }
`;

class TextPostBody extends React.Component {
  render() {
    return <StyledTextBody>{renderAst(this.props.htmlAst)}</StyledTextBody>;
  }
}

export default TextPostBody;
