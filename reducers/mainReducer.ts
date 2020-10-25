import { MainProps } from '../components/Main';
import { Action } from './index';

export const initialState = {
  title: 'Front-end Developer.',
  className: '',
};

const mainReducer = (state: MainProps = initialState, action: Action): MainProps => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default mainReducer;
