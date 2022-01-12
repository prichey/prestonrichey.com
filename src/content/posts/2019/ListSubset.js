import React, { useContext } from 'react';
import ListContext from './ListContext';
import { lengthEnum } from './lengthEnum';
import styled from 'styled-components';

const Div = styled.div`
  > ul {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ListSubset = ({ length, children }) => {
  const [contextLength] = useContext(ListContext);

  return contextLength >= lengthEnum[length] ? <Div>{children}</Div> : null;
};

export default ListSubset;
