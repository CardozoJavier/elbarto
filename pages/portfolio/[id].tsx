import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import {
  PROJECT,
  PORTFOLIO,
  HREF_PORTFOLIO,
} from '../../utils/constants';
import { App, Project } from '../../components';
import Context from '../../context';
import getAnimation from '../../utils/getAnimation';

const Portfolio = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { dispatch, portfolio, navigation } = useContext(Context);
  const { from, className } = navigation || {};
  const project = portfolio.projects.find((p) => p.id === id);

  useEffect(() => {
    const className = getAnimation(PROJECT, from);
    const payload = {
      className,
      from: PROJECT,
      prev: {
        text: PORTFOLIO,
        href: HREF_PORTFOLIO,
      },
      next: null,
    };
    dispatch({ type: PROJECT, payload });
  }, []);

  return (
    <App {...props} active={PORTFOLIO}>
      <Project {...project} className={className} />
    </App>
  );
}

export default Portfolio;
