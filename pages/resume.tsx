import { ReactElement, useEffect, useContext } from 'react';
import {
  DEFAULT_ANIMATION,
  RESUME,
  PORTFOLIO,
  HREF_PORTFOLIO,
  ABOUT,
  HREF_ABOUT,
} from '../utils/constants';
import { App, ResumeComponent } from '../components';
import classes from '../utils/classes';
import Context from '../context';

const Resume = (props): ReactElement => {
  const { dispatch, resume, navigation } = useContext(Context);
  const { from, className } = navigation || {};

  useEffect(() => {
    const payload = {
      className: classes.get(from) || DEFAULT_ANIMATION,
      from: RESUME,
      prev: {
        text: ABOUT,
        href: HREF_ABOUT,
      },
      next: {
        text: PORTFOLIO,
        href: HREF_PORTFOLIO,
      },
    };
    dispatch({ type: RESUME, payload });
  }, []);

  return (
    <App {...props} active={RESUME}>
      <ResumeComponent {...resume} className={className} />
    </App>
  );
}

export default Resume;
