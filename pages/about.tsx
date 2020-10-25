import { useEffect, useContext } from 'react';
import {
  App,
  AboutComponent
} from '../components';
import { ABOUT_ME } from '../utils/constants';
import Context from '../context';

/**
 * About me page
 */
const About: React.ReactNode = (props): React.ReactNode => {
  const { dispatch, about } = useContext(Context);
  const { title, description } = about || {};

  useEffect(() => {
    dispatch({ type: ABOUT_ME });
  }, []);

  return (
    <App {...props}>
      <AboutComponent title={title} description={description} />
    </App>
  );
}

export default About;
