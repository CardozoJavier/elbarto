import {
  Header
} from '.';
import { HeaderProps } from './Header';

interface AppProps {
  header: HeaderProps
}

interface AppInterface {
  (props: AppProps): JSX.Element
}

const App: AppInterface = ({ header }: AppProps): JSX.Element => {

  return (
    <>
      <Header {...header} />
    </>
  );
};

export default App;
