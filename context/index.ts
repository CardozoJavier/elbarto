import { createContext } from 'react';
import { initialState } from '../reducers';

const Context = createContext(initialState);

export default Context;