import React, { useState } from 'react';
import loadable from '@loadable/component';

import styled from 'styled-components';

import bg from './bg.png';

const Div = styled.div`
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RainbowKnot = loadable(() => import('../RainbowKnot'));

const PreRainbowKnot = props => {
  const [loaded, setLoaded] = useState(false);

  if (loaded === true) {
    return <RainbowKnot {...props} />;
  } else {
    return (
      <Div>
        <Button onClick={() => setLoaded(true)}>Click to load</Button>
      </Div>
    );
  }
};

export default PreRainbowKnot;
