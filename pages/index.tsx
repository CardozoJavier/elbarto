import { useEffect, useContext } from 'react';
import { withTheme } from 'styled-components';
import { App, Main } from '../components';
import { HOME, DEFAULT_ANIMATION, ABOUT_ME, HREF_ABOUT } from '../utils/constants';
import classes from '../utils/classes';
import Context from '../context';

const Home: React.ReactNode = (props): React.ReactNode => {
  const { dispatch, navigation } = useContext(Context);
  const { from, className } = navigation || {};

  useEffect(() => {
    const payload = {
      className: classes.get(from) || DEFAULT_ANIMATION,
      prev: null,
      from: HOME,
      next: {
        text: ABOUT_ME,
        href: HREF_ABOUT,
      }
    };
    dispatch({ type: HOME, payload });
  }, []);

  return (
    <App {...props}>
      <Main className={className} />
    </App>
  );
}

export default withTheme(Home);
