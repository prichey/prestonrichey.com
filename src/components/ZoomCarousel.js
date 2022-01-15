import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import ZoomImage from './ZoomImage';

const prevNextCss = css`
  position: absolute;
  font-size: 2em;
  cursor: pointer;
  user-select: none;
  top: 0;
  height: 100%;
  display: grid;
  align-content: center;

  &:hover {
    color: blue;
  }

  @media (min-width: 550px) {
    font-size: 3em;
  }
`;

const Prev = styled.div`
  ${prevNextCss}
  left: -0.65em;
  transform: rotateY(180deg);

  @media (min-width: 550px) {
    left: -1em;
  }
`;

const Next = styled.div`
  ${prevNextCss}
  right: -0.65em;

  @media (min-width: 550px) {
    right: -1em;
  }
`;

const Wrap = styled.div`
  position: relative;
  user-select: none;
`;

const ZoomCarousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex(index >= items.length - 1 ? 0 : index + 1);
  }, [items, index]);

  const handlePrev = useCallback(() => {
    setIndex(index <= 0 ? items.length - 1 : index - 1);
  }, [items, index]);

  if (!(Array.isArray(items) && items.length > 0)) {
    return null;
  }

  if (items.length === 1) {
    // no need for a carousel if only one image
    return <ZoomImage {...items[0]} />;
  }

  return (
    <Wrap>
      <Prev onClick={handlePrev}>
        <span>➜</span>
      </Prev>
      <ZoomImage {...items[index]} />
      <Next onClick={handleNext}>
        <span>➜</span>
      </Next>
    </Wrap>
  );
};

export default ZoomCarousel;
