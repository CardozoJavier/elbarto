import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Provider from '../Provider';
import setViewportHeight from '../utils/setViewportHeight';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    // Set the --vh css variable to calculate real viewport height (with not browsers bar in web mobile)
    setViewportHeight();
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
