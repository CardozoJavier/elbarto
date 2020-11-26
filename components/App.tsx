import Head from 'next/head';
import { useContext } from 'react';
import {
  Header,
  Wrapper,
  Navigation,
} from '.';
import Context from '../context';

interface AppProps {
  children: React.ReactElement;
  active: string;
}

interface AppInterface {
  (props: AppProps): JSX.Element
}

const App: AppInterface = ({ children, active }: AppProps): JSX.Element => {
  const { header, navigation } = useContext(Context);

  return (
    <Wrapper>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Header {...header} active={active} />
      {children}
      <Navigation {...navigation} />
    </Wrapper>
  );
}

export default App;
