import { NavigationProps } from '../components/Navigation';
import {
  HOME,
  ABOUT_ME,
  HREF_ABOUT,
  DEFAULT_ANIMATION,
} from '../utils/constants';
import { Action } from './index';

export const initialState = {
  className: DEFAULT_ANIMATION,
  from: null,
  prev: null,
  next: {
    text: ABOUT_ME,
    href: HREF_ABOUT,
  },
};

const navigationReducer = (state: NavigationProps = initialState, action: Action): NavigationProps => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        ...action.payload,
      };
    case ABOUT_ME: 
      return {
        ...state,
        ...action.payload,
    };
    default:
      return { ...state };
  }
};

export default navigationReducer;
