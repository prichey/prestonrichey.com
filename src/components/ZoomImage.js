import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import styled from 'styled-components';

const StyledFigcaption = styled.figcaption`
  text-align: right;
  font-size: 0.8em;
  padding 0.25em 0;
  // text-transform: uppercase;
  color: #999;
`;

const ZoomImage = ({ src, zoomSrc, alt, caption }) => {
  return (
    <figure>
      <ImageZoom
        image={{
          src: src,
          alt: alt || caption
        }}
        zoomImage={{
          src: zoomSrc || src,
          alt: alt || caption
        }}
      />

      {caption && <StyledFigcaption>{caption}</StyledFigcaption>}
    </figure>
  );
};

export default ZoomImage;
