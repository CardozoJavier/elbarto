import debounce from 'lodash.debounce';
import windowExists from './windowExists';

const setViewportHeight = (): void => {
  if (windowExists) {
    const resizeHandler = () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    // We listen to the resize event
    window.addEventListener('resize', debounce(resizeHandler, 500));
  }
};

export default setViewportHeight;
