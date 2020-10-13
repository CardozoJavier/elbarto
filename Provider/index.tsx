import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import getTheme from '../utils/theme';
import { combineReducer, initialState } from '../reducers';
import Context from '../context';

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <ThemeProvider theme={getTheme(state.theme)}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
}

export default ContextProvider;