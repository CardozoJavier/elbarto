import { useEffect, useContext } from 'react';
import {
  RESUME,
  PORTFOLIO,
  HREF_RESUME,
} from '../utils/constants';
import { App, PortfolioComponent } from '../components';
import Context from '../context';
import getAnimation from '../utils/getAnimation';

const Portfolio = (props) => {
  const { dispatch, portfolio, navigation } = useContext(Context);
  const { from, className } = navigation || {};

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
      <PortfolioComponent {...portfolio} className={className} />
    </App>
  );
}

export default Portfolio;
