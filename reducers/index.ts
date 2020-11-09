import { Dispatch } from 'react';
import toggleReducer, { initialState as toggle } from './toggleReducer';
import headerReducer, { initialState as header } from './headerReducer';
import themeReducer, { initialState as theme } from './themeReducer';
import navigationReducer, { initialState as navigation } from './navigationReducer';
import mainReducer, { initialState as main } from './mainReducer';
import aboutReducer, { initialState as about } from './aboutReducer';
import resumeReducer, { initialState as resume } from './resumeReducer';
import { HeaderProps } from '../components/Header';
import { ToggleProps } from '../components/Toggle';
import { NavigationProps } from '../components/Navigation';
import { MainProps } from '../components/Main';
import { AboutProps } from '../components/About';
import { ResumeProps } from '../components/Resume';

export const initialState: State = {
  main,
  navigation,
  header,
  toggle,
  theme,
  about,
  resume,
  dispatch: () => null,
};

export interface State {
  navigation: NavigationProps
  main: MainProps
  header: HeaderProps
  toggle: ToggleProps
  theme: string
  about: AboutProps
  resume: ResumeProps
  dispatch: Dispatch<Action>
};

export interface Action {
  type: string
  payload?: NavigationProps
};

export const combineReducer = (state: State, action: Action): State => ({
  toggle: toggleReducer(state.toggle, action),
  header: headerReducer(state.header, action),
  theme: themeReducer(state.theme, action),
  navigation: navigationReducer(state.navigation, action),
  main: mainReducer(state.main, action),
  about: aboutReducer(state.about, action),
  resume: resumeReducer(state.resume, action),
  dispatch: () => null,
});