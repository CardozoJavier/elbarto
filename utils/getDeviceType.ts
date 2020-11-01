import windowExists from './windowExists';
import {
  MOBILE,
  TABLET,
  DESKTOP,
} from './constants';

const mobileRegex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;
const tabletRegex = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i;

const getDeviceType = (): string => {
  if (!windowExists) return '';

  const userAgent = navigator.userAgent;
  if (tabletRegex.test(userAgent)) {
    return TABLET;
  }

  if (mobileRegex.test(userAgent)) {
    return MOBILE;
  }

  return DESKTOP;
};

export const isMobile = () => (getDeviceType() === MOBILE);

export const isTablet = () => (getDeviceType() === TABLET);

export const isDesktop = () => (getDeviceType() === DESKTOP);

export default getDeviceType;
