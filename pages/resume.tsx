import { ReactElement, useEffect, useContext } from 'react';
import {
  DEFAULT_ANIMATION,
  RESUME,
  PORTFOLIO,
  HREF_PORTFOLIO,
} from '../utils/constants';
import { App, ResumeComponent } from '../components';
import classes from '../utils/classes';
import Context from '../context';
import WIP from '../components/WIP';

const Resume = (props): ReactElement => {
  const { dispatch, resume, navigation } = useContext(Context);
  const { from, className } = navigation || {};

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
      <ResumeComponent {...resume} className={className} />
    </App>
  );
}

export default Resume;
