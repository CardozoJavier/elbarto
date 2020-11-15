import { useEffect, useContext } from 'react';
import {
  App,
  AboutComponent
} from '../components';
import {
  HOME,
  RESUME,
  ABOUT,
  HREF_HOME,
  HREF_RESUME,
} from '../utils/constants';
import Context from '../context';
import getAnimation from '../utils/getAnimation';

/**
 * About me page
 */
const About: React.ReactNode = (props): React.ReactNode => {
  const { dispatch, about, navigation } = useContext(Context);
  const { title, description } = about || {};
  const { from, className } = navigation || {};

  useEffect(() => {
    const className = getAnimation(ABOUT, from);
    const payload = {
      className,
      from: ABOUT,
      prev: {
        text: HOME,
        href: HREF_HOME,
      },
      next: {
        text: RESUME,
        href: HREF_RESUME,
      }
    };
    dispatch({ type: ABOUT, payload });
  }, []);

  return (
    <App {...props} active={ABOUT}>
      <AboutComponent title={title} description={description} className={className} />
    </App>
  );
}

export default About;
