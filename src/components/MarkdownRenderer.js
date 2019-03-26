import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdownRenderer = styled.div`
  width: 100%;

  @media (min-width: 550px) {
    overflow: hidden;
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

const MarkdownRenderer = () => {
  const [value, setValue] = useState(`### this textarea is editable

![](https://i.imgur.com/rv81Iei.gif)`);

  return (
    <StyledMarkdownRenderer>
      <StyledTextAreaWrap>
        <StyledTextArea
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
      </StyledTextAreaWrap>

      <StyledMarkdownOutputWrap>
        <ReactMarkdown source={value} />
      </StyledMarkdownOutputWrap>
    </StyledMarkdownRenderer>
  );
};

export default MarkdownRenderer;
