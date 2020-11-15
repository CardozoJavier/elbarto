import { ReactElement, useEffect, useContext } from 'react';
import {
  RESUME,
  PORTFOLIO,
  HREF_PORTFOLIO,
  ABOUT,
  HREF_ABOUT,
} from '../utils/constants';
import { App, ResumeComponent } from '../components';
import Context from '../context';
import getAnimation from '../utils/getAnimation';

const Resume = (props): ReactElement => {
  const { dispatch, resume, navigation } = useContext(Context);
  const { from, className } = navigation || {};

  useEffect(() => {
    const className = getAnimation(RESUME, from);
    const payload = {
      className,
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
