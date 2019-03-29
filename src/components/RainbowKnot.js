import React from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TorusKnotGeometry,
  MeshNormalMaterial,
  Mesh
} from 'three';
import Dimensions from 'react-dimensions';

class RainbowKnot extends React.Component {
  componentDidMount() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new WebGLRenderer({
      antialias: true
    });

    const geometry = new TorusKnotGeometry(1, 0.175, 100, 10, 5, 6);
    const material = new MeshNormalMaterial();
    const torus = new Mesh(geometry, material);

    camera.position.z = 3.5;

    scene.add(torus);

    renderer.setClearColor('#ffffff');
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.torus = torus;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.torus.rotation.x += 0.01;
    this.torus.rotation.y += 0.01;
    this.torus.rotation.z += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    return (
      <div
        width={width}
        height={height}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Dimensions()(RainbowKnot);
