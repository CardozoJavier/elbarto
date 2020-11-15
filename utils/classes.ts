import {
  HOME,
  RESUME,
  ABOUT,
  PORTFOLIO,
} from './constants';

const classes = new Map([
  [HOME, {
    left: [],
    right: [ABOUT, RESUME, PORTFOLIO],
  }],
  [ABOUT, {
    left: [HOME],
    right: [RESUME, PORTFOLIO],
  }],
  [RESUME, {
    left: [HOME, ABOUT],
    right: [PORTFOLIO],
  }],
  [PORTFOLIO, {
    left: [HOME, ABOUT, RESUME],
    right: [],
  }]
]);

export default classes;
