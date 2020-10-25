import { AboutProps } from '../components/About';
import { Action } from './index';
import about from '../lib/about';

export const initialState = {
  ...about
};

const headerReducer = (state: AboutProps = initialState, action: Action): AboutProps => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default headerReducer;
