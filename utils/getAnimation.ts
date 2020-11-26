import classes from './classes';
import {
  DEFAULT_ANIMATION,
  LEFT_TO_RIGHT_ANIMATION,
  RIGHT_TO_LEFT_ANIMATION,
} from './constants';

const getAnimation = (active: string, fromPage: string) => {
  if (!fromPage) return DEFAULT_ANIMATION;

  const { right } = classes.get(active) || {};
  const className = right.includes(fromPage) ? LEFT_TO_RIGHT_ANIMATION : RIGHT_TO_LEFT_ANIMATION;

  return className
};

export default getAnimation;
