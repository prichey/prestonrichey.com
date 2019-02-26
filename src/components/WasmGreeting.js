import React, { useState } from 'react';
import styled from 'styled-components';

// TODO: get to work with blog post
// Through the incredible power of <xa href="/blog/react-in-markdown/">React in Markdown</xa>, here's a working example of what we coded above:
//
// <div><wasmgreeting></wasmgreeting></div>

const Button = styled.button`
  padding: 0.5em;
  border-radius: 5px;
`;

const Loaded = ({ wasm }) => <Button onClick={wasm.greet}>Click me</Button>;

const UnLoaded = ({ loading, loadWasm }) => {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <Button onClick={loadWasm}>Load library</Button>
  );
};

const WasmGreeting = () => {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState(null);

  const loadWasm = async () => {
    try {
      setLoading(true);
      const wasm = await import('@prichey/hello-wasm');
      setWasm(wasm);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {wasm ? (
        <Loaded wasm={wasm} />
      ) : (
        <UnLoaded loading={loading} loadWasm={loadWasm} />
      )}
    </div>
  );
};

export default WasmGreeting;
