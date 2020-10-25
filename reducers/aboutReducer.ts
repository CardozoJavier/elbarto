import { AboutProps } from '../components/About';
import { Action } from './index';
import about from '../lib/about';
import {
  DEFAULT_ANIMATION,
  LEFT_TO_RIGHT_ANIMATION,
  RIGHT_TO_LEFT_ANIMATION,
} from '../utils/constants';

export const initialState = {
  ...about,
  className: '',
};

const aboutReducer = (state: AboutProps = initialState, action: Action): AboutProps => {
  switch (action.type) {
    case RIGHT_TO_LEFT_ANIMATION:
      return {
        ...state,
        className: RIGHT_TO_LEFT_ANIMATION,
      };
    case LEFT_TO_RIGHT_ANIMATION:
      return {
        ...state,
        className: LEFT_TO_RIGHT_ANIMATION,
      };
    case DEFAULT_ANIMATION:
      return {
        ...state,
        className: DEFAULT_ANIMATION,
      };
    default:
      return { ...state };
  }
};

export default aboutReducer;
