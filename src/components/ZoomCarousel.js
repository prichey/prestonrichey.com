import React, { useState, useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';
import ZoomImage from './ZoomImage';
import useWindowDimensions from '../hooks/useWindowDimensions';

const prevNextCss = css`
  position: absolute;
  font-size: 2em;
  cursor: pointer;
  user-select: none;
  top: 0;
  height: 100%;
  display: grid;
  align-content: center;
  transition: transform 0.1s ease-in-out;

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
    left: -0.95em;

    &:hover {
      color: blue;
      transform: translateX(-0.05em) rotateY(180deg);
    }
  }
`;

const Next = styled.div`
  ${prevNextCss}
  right: -0.65em;

  @media (min-width: 550px) {
    right: -0.95em;

    &:hover {
      color: blue;
      transform: translateX(0.05em);
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  user-select: none;
`;

const TapInfo = styled.p`
  font-size: 14px;
  margin: 0;
  color: #999;
  text-align: center;
`;

const ZoomCarousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);
  const dims = useWindowDimensions();

  const isMobile = useMemo(() => {
    if (dims && dims.width && dims.width < 950) {
      return true;
    }

    return false;
  }, [dims]);

  const handleNext = useCallback(() => {
    setIndex(index >= items.length - 1 ? 0 : index + 1);
  }, [items, index]);

  const handlePrev = useCallback(() => {
    setIndex(index <= 0 ? items.length - 1 : index - 1);
  }, [items, index]);

  const handleWrapClick = useCallback(
    e => {
      if (isMobile) {
        handleNext();
        e.preventDefault();
      }
    },
    [isMobile, handleNext]
  );

  if (!(Array.isArray(items) && items.length > 0)) {
    return null;
  }

  if (items.length === 1) {
    // no need for a carousel if only one image
    return <ZoomImage {...items[0]} />;
  }

  return (
    <Wrap onPointerUp={handleWrapClick}>
      {!isMobile && (
        <Prev onClick={handlePrev}>
          <span>➜</span>
        </Prev>
      )}
      <ZoomImage
        {...items[index]}
        caption={isMobile ? undefined : items[index].caption}
        disableZoom={isMobile}
      />
      {isMobile && <TapInfo>tap to advance</TapInfo>}
      {!isMobile && (
        <Next onClick={handleNext}>
          <span>➜</span>
        </Next>
      )}
    </Wrap>
  );
};

export default ZoomCarousel;
