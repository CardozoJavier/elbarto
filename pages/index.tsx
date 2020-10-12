import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import {
  Wrapper,
  Header,
} from '../components';
import header from '../lib/header';

const Home: React.ReactNode = (): React.ReactNode => (
  <ThemeProvider theme={theme('light')}>
    <Wrapper>
      <Header {...header} />
    </Wrapper>
  </ThemeProvider>
);

export default Home;
