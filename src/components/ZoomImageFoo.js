import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import Helmet from 'react-helmet';

class ZoomImageFoo extends Component {
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

export default ZoomImageFoo;
