import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Dimensions from 'react-dimensions';

class RainbowCube extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 3.5);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.

    this.state = {
      cubeRotation: new THREE.Euler()
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.01,
          this.state.cubeRotation.z + 0.01
        )
      });
    };
  }

  render() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    return (
      <React3
        mainCamera="camera" // this points to the perspectiveCamera below
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        antialias
        pixelRatio={window.devicePixelRatio}
        clearColor={0xffffff}>
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            <torusKnotGeometry
              radius={1}
              tube={0.175}
              p={5}
              q={6}
              tubularSegments={100}
              radialSegments={10}
            />
            <meshNormalMaterial />
          </mesh>
        </scene>
      </React3>
    );
  }
}

export default Dimensions()(RainbowCube);
