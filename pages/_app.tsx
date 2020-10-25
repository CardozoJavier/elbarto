import { AppProps } from 'next/app';
import Provider from '../Provider';
import { Wrapper } from '../components';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default App;
