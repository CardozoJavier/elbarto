import debounce from 'lodash.debounce';
import windowExists from './windowExists';

const setViewportHeight = (): void => {
  if (windowExists) {
    let init = true;
    let vh = window.innerHeight;
    if (init) {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      init = false;
    }
    const resizeHandler = () => {
      vh = window.innerHeight;
      // We execute the same script as before
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    // We listen to the resize event
    window.addEventListener('resize', debounce(resizeHandler, 500));
  }
};

export default setViewportHeight;
