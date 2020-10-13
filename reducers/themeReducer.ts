import {
  DARK,
  LIGHT,
  TOGGLE_ON,
  TOGGLE_OFF,
} from '../utils/constants';

export const initialState = LIGHT;

const themeReducer = (state, action) => {
  console.log({ state, action })
  switch (action.type) {
    case TOGGLE_ON:
      return DARK
    case TOGGLE_OFF:
      return LIGHT;
    default:
      return state;
  }
};

export default themeReducer;
