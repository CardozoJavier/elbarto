import { css }from 'styled-components';

const sizes = {
  extraLarge: 3840,
  large: 1024,
  medium: 768,
  small: 480,
  extraSmall: 320,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: string[]) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `;
  return acc;
}, {});

export default media;
