import { useEffect, useContext } from 'react';
import {
  RESUME,
  HREF_RESUME,
  DEFAULT_ANIMATION,
  ABOUT_ME,
  HREF_ABOUT,
  PORTFOLIO,
} from '../utils/constants';
import { App } from '../components';
import classes from '../utils/classes';
import Context from '../context';
import WIP from '../components/WIP';

const Portfolio = (props) => {
  const { dispatch, navigation } = useContext(Context);
  const { from } = navigation || {};

  useEffect(() => {
    const payload = {
      className: classes.get(from) || DEFAULT_ANIMATION,
      from: PORTFOLIO,
      prev: {
        text: ABOUT_ME,
        href: HREF_ABOUT,
      },
      next: {
        text: RESUME,
        href: HREF_RESUME,
      }
    };
    dispatch({ type: PORTFOLIO, payload });
  }, []);

  return (
    <App {...props}>
      <WIP />
    </App>
  );
}

export default Portfolio;
