import { ToggleProps } from '../components/Toggle';
import { Action } from './index';
import {
  TOGGLE_ON,
  TOGGLE_OFF,
} from '../utils/constants';

export const initialState = {
  state: false,
  disabled: false,
};

const toggleReducer = (state: ToggleProps = initialState, action: Action): ToggleProps => {
  switch (action.type) {
    case TOGGLE_ON:
      return {
          ...state,
          state: true,
        }
    case TOGGLE_OFF:
      return {
          ...state,
          state: false,
        }
    default:
      return state;
  }
};

export default toggleReducer;
