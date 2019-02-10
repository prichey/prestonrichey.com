import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
import Dimensions from 'react-dimensions';
import styled from 'styled-components';

// const OrbitControls = require('three-orbit-controls')(THREE);
OBJLoader(THREE);

const StyledSceneWrap = styled.div`
  /* &:hover {
    cursor: ${props => (props.dragging === true ? 'grabbing' : 'grab')};
  } */
  display: ${props => (props.loaded ? 'block' : 'none')}
`;

class HeadScene extends Component {
  state = {
    cameraPosition: new THREE.Vector3(0, 0, 4),
    groupRotation: new THREE.Euler(0, Math.PI * 0, 0),
    obj: null,
    loaded: false
  };

  componentDidMount() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    // const controls = new THREE.OrbitControls(camera);
    // camera.position.set(this.state.cameraPosition);
    // controls.update();

    const group = new THREE.Group();

    // const controls = new OrbitControls(camera);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.4;
    // controls.rotateSpeed = 0.6;
    // controls.enableZoom = false;
    // controls.enablePan = false;
    // controls.autoRotate = false;
    // controls.enableKeys = false;
    // // controls.minPolarAngle = -Infinity;
    // // controls.maxPolarAngle = Infinity;
    // this.controls = controls;
    //
    // this.controls.addEventListener('start', () => {
    //   this.setState({
    //     dragging: true
    //   });
    // });
    //
    // this.controls.addEventListener('end', () => {
    //   this.setState({
    //     dragging: false
    //   });
    // });

    let headAdded = false;
    if (!!window.headObject) {
      try {
        group.add(window.headObject);
        headAdded = true;
        this.setState({ loaded: true });
      } catch (e) {
        console.log(e);
      }
    }

    if (!headAdded) {
      const objLoader = new THREE.OBJLoader();
      objLoader.load('/head.obj', obj => {
        obj.traverse(child => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshNormalMaterial({
              side: THREE.DoubleSide,
              wireframe: false,
              flatShading: false,
              morphTargets: false
            });
          }
        });
        //
        const scalar = 1.5;
        obj.scale.set(scalar, scalar, scalar);
        obj.rotation.set(Math.PI * -0.05, Math.PI * 0, Math.PI * 0);
        group.add(obj);
        this.setState({ loaded: true });
        window.headObject = obj; // store the head on the window
        // there's probably a better way to do this, but I can't figure it out at the moment
        // this seems to work better than requesting the obj on each request
      });
    }

    camera.position.set(
      this.state.cameraPosition.x,
      this.state.cameraPosition.y,
      this.state.cameraPosition.z
    );

    scene.add(group);
    renderer.setClearColor('#ffffff');
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.group = group;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    this.setState({ loaded: false });

    // this.controls.dispose();
    // delete this.controls;
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
    this.group.rotation.y += 0.01;

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
      <StyledSceneWrap loaded={this.state.loaded}>
        <div
          width={width}
          height={height}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </StyledSceneWrap>
    );
  }
}

export default Dimensions()(HeadScene);
