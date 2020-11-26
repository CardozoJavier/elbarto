import { useEffect, useContext } from 'react';
import { withTheme } from 'styled-components';
import { App, Main } from '../components';
import {
  HOME,
  ABOUT, 
  HREF_ABOUT
} from '../utils/constants';
import Context from '../context';
import getAnimation from '../utils/getAnimation';

const Home: React.ReactNode = (props): React.ReactNode => {
  const { dispatch, navigation, main } = useContext(Context);
  const { title } = main;
  const { from, className } = navigation || {};

  useEffect(() => {
    const className = getAnimation(HOME, from);
    const payload = {
      className,
      prev: null,
      from: HOME,
      next: {
        text: ABOUT,
        href: HREF_ABOUT,
      },
    };
    dispatch({ type: HOME, payload });
  }, []);

  return (
    <App {...props} active={HOME}>
      <Main title={title} className={className} />
    </App>
  );
}

export default withTheme(Home);
