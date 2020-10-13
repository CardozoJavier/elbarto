import { HeaderProps } from '../components/Header';
import { Action } from './index';
import header from '../lib/header';

export const initialState = {
  ...header
};

const headerReducer = (state: HeaderProps = initialState, action: Action): HeaderProps => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default headerReducer;
