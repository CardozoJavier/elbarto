import { PortfolioProps } from '../components/Portfolio';
import { Action } from './index';
import portfolio from '../lib/portfolio';
import {
  DEFAULT_ANIMATION,
  LEFT_TO_RIGHT_ANIMATION,
  RIGHT_TO_LEFT_ANIMATION,
} from '../utils/constants';

export const initialState = {
  ...portfolio,
  className: '',
};

const portfolioReducer = (state: PortfolioProps = initialState, action: Action): PortfolioProps => {
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

export default portfolioReducer;
