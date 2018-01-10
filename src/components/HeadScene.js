import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import OBJLoader from 'three-obj-loader';
import Dimensions from 'react-dimensions';

OBJLoader(THREE);

// TODO: THREE DRAG CONTROLS?

class HeadScene extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.state || {};

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 30);

    this.state.cubeRotation = new THREE.Euler();

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0,
          this.state.cubeRotation.y + 0.0125,
          this.state.cubeRotation.z + 0
        )
      });
    };
  }

  componentDidMount() {
    const { group } = this.refs;

    const objLoader = new THREE.OBJLoader();
    objLoader.load('/head-modified.obj', obj => {
      obj.traverse(child => {
        if (child instanceof THREE.Mesh) {
          // child.geometry.computeVertexNormals();
          child.material = new THREE.MeshNormalMaterial({
            side: THREE.DoubleSide,
            wireframe: false,
            flatShading: false,
            morphTargets: false
          });
        }
      });

      // obj.position.y = -95;
      const scalar = 11;
      // const scalar = 30;
      obj.scale.set(scalar, scalar, scalar);
      obj.rotation.set(Math.PI * -0.05, Math.PI * 0, Math.PI * 0);
      group.add(obj);
      this.setState({
        obj: obj
      });
      // obj.position.set(-10, 15, 0);
      // obj.position.set(0, 0, 0);
      // scene.add(obj);

      // while (true) {
      //   obj.rotation.set(this.state.cubeRotation);
      // }
    });
  }

  componentWillUnmount() {
    this.refs.group.remove(this.state.obj);
  }

  render() {
    const width = this.props.containerWidth; // canvas width
    const height = this.props.containerHeight; // canvas height

    const { obj } = this.state;

    return (
      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        clearColor={0xffffff}
        pixelRatio={window.devicePixelRatio}>
        <scene ref="scene">
          <perspectiveCamera
            name="camera"
            fov={50}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <group ref="group" rotation={this.state.cubeRotation} />
        </scene>
      </React3>
    );
  }
}

export default Dimensions()(HeadScene);
