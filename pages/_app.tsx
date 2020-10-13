import { AppProps } from 'next/app';
import Provider from '../Provider';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
