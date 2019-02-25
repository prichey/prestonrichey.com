import React from 'react';

const xa = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

export default xa;
