import {
  HOME,
  ABOUT_ME,
  PORTFOLIO,
  RIGHT_TO_LEFT_ANIMATION,
  LEFT_TO_RIGHT_ANIMATION
} from './constants';

const classes = new Map([
  [HOME, RIGHT_TO_LEFT_ANIMATION],
  [PORTFOLIO, LEFT_TO_RIGHT_ANIMATION],
  [ABOUT_ME, LEFT_TO_RIGHT_ANIMATION],
]);

export default classes;
