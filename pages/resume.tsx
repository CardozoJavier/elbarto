import { useEffect, useContext } from 'react';
import {
  DEFAULT_ANIMATION,
  RESUME,
  PORTFOLIO,
  HREF_PORTFOLIO,
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
      from: RESUME,
      prev: {
        text: PORTFOLIO,
        href: HREF_PORTFOLIO,
      },
      next: null,
    };
    dispatch({ type: RESUME, payload });
  }, []);

  return (
    <App {...props}>
      <WIP />
    </App>
  );
}

export default Portfolio;
