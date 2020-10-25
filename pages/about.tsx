import { useEffect, useContext } from 'react';
import {
  App,
  AboutComponent
} from '../components';
import {
  HOME,
  ABOUT_ME,
  PORTFOLIO,
  HREF_HOME,
  HREF_PORTFOLIO,
  DEFAULT_ANIMATION,
} from '../utils/constants';
import Context from '../context';
import classes from '../utils/classes';

/**
 * About me page
 */
const About: React.ReactNode = (props): React.ReactNode => {
  const { dispatch, about, navigation } = useContext(Context);
  const { title, description } = about || {};
  const { from, className } = navigation || {};

  useEffect(() => {
    const payload = {
      className: classes.get(from) || DEFAULT_ANIMATION,
      from: ABOUT_ME,
      prev: {
        text: HOME,
        href: HREF_HOME,
      },
      next: {
        text: PORTFOLIO,
        href: HREF_PORTFOLIO,
      }
    };
    dispatch({ type: ABOUT_ME, payload });
  }, []);

  return (
    <App {...props}>
      <AboutComponent title={title} description={description} className={className} />
    </App>
  );
}

export default About;
