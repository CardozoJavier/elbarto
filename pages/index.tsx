import { useContext } from 'react';
import { withTheme } from 'styled-components';
import Context from '../context';
import {
  Wrapper,
  App
} from '../components';

const Home: React.ReactNode = (props): React.ReactNode => (
  <Wrapper>
    <App {...props} />
  </Wrapper>
);
export default withTheme(Home);
