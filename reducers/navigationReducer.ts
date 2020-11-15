import { NavigationProps } from '../components/Navigation';
import {
  HOME,
  ABOUT,
  HREF_ABOUT,
  DEFAULT_ANIMATION,
  PORTFOLIO,
  RESUME,
} from '../utils/constants';
import { Action } from './index';

export const initialState = {
  className: DEFAULT_ANIMATION,
  from: null,
  prev: null,
  next: {
    text: ABOUT,
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
    case ABOUT:
      return {
        ...state,
        ...action.payload,
    };
    case RESUME:
      return {
        ...state,
        ...action.payload,
    };
    case PORTFOLIO:
      return {
        ...state,
        ...action.payload,
    };
    default:
      return { ...state };
  }
};

export default navigationReducer;
