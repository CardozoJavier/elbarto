import { ResumeProps } from '../components/Resume';
import { Action } from './index';
import resume from '../lib/resume';
import {
  DEFAULT_ANIMATION,
  LEFT_TO_RIGHT_ANIMATION,
  RIGHT_TO_LEFT_ANIMATION,
} from '../utils/constants';

export const initialState = {
  ...resume,
  className: '',
};

const resumeReducer = (state: ResumeProps = initialState, action: Action): ResumeProps => {
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

export default resumeReducer;
