import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const input = '# This is a header\n\nAnd this is a paragraph';

const StyledMarkdownRenderer = styled.div`
  width: 100%;

  @media (min-width: 550px) {
    overflow: hidden;
  }
`;

const StyledHalfDiv = styled.div`
  height: 100%;

  @media (min-width: 550px) {
    width: 50%;
    float: left;
  }
`;

const StyledTextAreaWrap = styled.div`
  height: 100%;

  @media (min-width: 550px) {
    width: 50%;
    float: left;
  }
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  font-size: 0.9em;
  padding: 1em;
  min-height: 100px;
  resize: none;

  @media (min-width: 550px) {
    min-height: 300px;
  }
`;

const StyledMarkdownOutputWrap = styled.div`
  padding: 1em;
  @media (min-width: 550px) {
    width: 50%;
    float: left;
  }
`;

class MarkdownRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `### this textarea is editable

![](https://i.imgur.com/rv81Iei.gif)`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <StyledMarkdownRenderer>
        <StyledTextAreaWrap>
          <StyledTextArea
            value={this.state.value}
            onChange={this.handleChange}
          />
        </StyledTextAreaWrap>

        <StyledMarkdownOutputWrap>
          <ReactMarkdown source={this.state.value} />
        </StyledMarkdownOutputWrap>
      </StyledMarkdownRenderer>
    );
  }
}

export default MarkdownRenderer;
