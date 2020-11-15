import { useEffect, useContext } from 'react';
import {
  RESUME,
  PORTFOLIO,
  HREF_RESUME,
} from '../utils/constants';
import { App } from '../components';
import Context from '../context';
import WIP from '../components/WIP';
import getAnimation from '../utils/getAnimation';

const Portfolio = (props) => {
  const { dispatch, navigation } = useContext(Context);
  const { from } = navigation || {};

  useEffect(() => {
    const className = getAnimation(PORTFOLIO, from);
    const payload = {
      className,
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
