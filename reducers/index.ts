import toggleReducer, { initialState as toggle } from './toggleReducer';
import headerReducer, { initialState as header } from './headerReducer';
import themeReducer, { initialState as theme } from './themeReducer';
import { HeaderProps } from '../components/Header';
import { ToggleProps } from '../components/Toggle';

export const initialState = {
  header,
  toggle,
  theme,
  dispatch: null
};

export interface State {
  header: HeaderProps
  toggle: ToggleProps
  theme: string
}

export interface Action {
  type: string
}

export const combineReducer = (state: State, action: Action): State => ({
  toggle: toggleReducer(state.toggle, action),
  header: headerReducer(state.header, action),
  theme: themeReducer(state.theme, action),
});