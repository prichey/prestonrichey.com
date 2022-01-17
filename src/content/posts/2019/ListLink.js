import React, { useContext } from 'react';
import ListContext from './ListContext';
import { lengthEnum } from './lengthEnum';

import styled from 'styled-components';

const SelectedLink = styled.a`
  color: black;
  border: none;
  font-weight: bold;

  &:hover {
    color: black;
    border: none;
    font-weight: bold;
    cursor: default;
  }
`;

const UnselectedLink = styled.a``;

const ListLink = ({ length, children }) => {
  const [contextLength, setContextLength] = useContext(ListContext);
  const selected = contextLength === lengthEnum[length];

  const handleClick = e => {
    e.preventDefault();
    setContextLength(length in lengthEnum ? lengthEnum[length] : 0);
  };

  return selected ? (
    <SelectedLink href="#" onClick={handleClick}>
      {children}
    </SelectedLink>
  ) : (
    <UnselectedLink href="#" onClick={handleClick}>
      {children}
    </UnselectedLink>
  );
};

export default ListLink;
