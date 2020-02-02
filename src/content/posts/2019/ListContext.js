import React from 'react';
import { lengthEnum } from './lengthEnum';

const ListContext = React.createContext([lengthEnum.short, () => {}]);

export default ListContext;
