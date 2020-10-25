import { NavigationProps } from '../components/Navigation';
import {
  HOME,
  ABOUT_ME,
  PORTFOLIO,
  HREF_ABOUT,
  HREF_HOME,
  HREF_PORTFOLIO,
} from '../utils/constants';
import { Action } from './index';

export const initialState = {
  prev: null,
  next: {
    text: ABOUT_ME,
    href: HREF_ABOUT,
  },
};

const headerReducer = (state: NavigationProps = initialState, action: Action): NavigationProps => {
  switch (action.type) {
    case HOME:
      return {
        prev: null,
        next: {
          text: ABOUT_ME,
          href: HREF_ABOUT,
        }
      };
    case ABOUT_ME: 
     return {
       prev: {
         text: HOME,
         href: HREF_HOME,
       },
       next: {
         text: PORTFOLIO,
         href: HREF_PORTFOLIO,
       }
     };
    default:
      return { ...state };
  }
};

export default headerReducer;
