import React, { useState } from 'react';
import ListContext from './ListContext';
import { lengthEnum } from './lengthEnum';

const ListProvider = ({ children }) => {
  const listState = useState(lengthEnum.short);

  return (
    <ListContext.Provider value={listState}>{children}</ListContext.Provider>
  );
};

export default ListProvider;
