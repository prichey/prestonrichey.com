import React from "react";
import ImageZoom from "react-medium-image-zoom";
import styled from "styled-components";

const StyledFigcaption = styled.figcaption`
  text-align: right;
  font-size: 0.8em;
  padding 0.25em 0;
  // text-transform: uppercase;
  color: #999;
`;

class ZoomImage extends React.Component {
  render() {
    return (
      <figure>
        <ImageZoom
          image={{
            src: this.props.src,
            alt: this.props.alt || this.props.caption
          }}
          zoomImage={{
            src: this.props.zoomsrc || this.props.src,
            alt: this.props.alt || this.props.caption
          }}
        />
        {this.props.caption && (
          <StyledFigcaption>{this.props.caption}</StyledFigcaption>
        )}
      </figure>
    );
  }
}

export default ZoomImage;
