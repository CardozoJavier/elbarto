import { useEffect, useContext } from 'react';
import {
  RESUME,
  PORTFOLIO,
  HREF_RESUME,
  DEFAULT_ANIMATION,
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
        text: RESUME,
        href: HREF_RESUME,
      },
      next: null,
    };
    dispatch({ type: PORTFOLIO, payload });
  }, []);

  return (
    <App {...props} active={PORTFOLIO}>
      <WIP />
    </App>
  );
}

export default Portfolio;
