import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

class ZoomImage extends React.Component {
  render() {
    return (
      <ImageZoom
        image={{
          src: this.props.src,
          alt: this.props.alt
        }}
        zoomImage={{
          src: this.props.zoomsrc || this.props.src,
          alt: this.props.alt
        }}
      />
    );
  }
}

export default ZoomImage;
