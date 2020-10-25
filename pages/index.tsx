import { useEffect, useContext } from 'react';
import { withTheme } from 'styled-components';
import {
  App,
  Main
} from '../components';
import { HOME } from '../utils/constants';
import Context from '../context';

const Home: React.ReactNode = (props): React.ReactNode => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: HOME });
  }, []);

  return (
    <App {...props}>
      <Main />
    </App>
  );
}

export default withTheme(Home);
