import { useContext } from 'react';
import {
  Header,
  Navigation,
} from '.';
import Context from '../context';

interface AppProps {
  children: React.ReactElement;
}

interface AppInterface {
  (props: AppProps): JSX.Element
}

const App: AppInterface = ({ children }: AppProps): JSX.Element => {
  const { header, navigation } = useContext(Context);

  return (
    <>
      <Header {...header} />
      {children}
      <Navigation {...navigation} />
    </>
  );
}

export default App;
