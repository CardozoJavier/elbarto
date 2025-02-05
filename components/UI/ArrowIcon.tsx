import { withTheme } from 'styled-components';
import { Arrow } from './styles/ArrowIcon.styles';

type Theme = {
  white: {
    w08: string,
  };
};

const ArrowIcon = ({ theme }: { theme: Theme}): React.ReactElement => (
  <Arrow width="20" height="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" xmlSpace="preserve">
        <path stroke="#fff" fill={theme.white.w08} d="M472.747,190.933H233.814l46.08-46.08c15.36-15.36,15.36-40.96,0-56.32l-35.84-37.547c-15.36-15.36-40.96-15.36-56.32,0
          L11.947,226.772C5.12,235.306,0,245.546,0,255.786c0,11.947,3.413,22.186,11.947,30.72l175.787,174.08
          c6.827,6.827,17.067,11.947,29.013,11.947c10.24,0,20.48-3.413,27.307-11.947l35.84-35.84c15.36-15.36,15.36-40.96,0-56.32
          L230.4,320.64h242.347c22.186,0,39.253-18.774,39.253-40.96v-49.493C512,208,494.933,190.933,472.747,190.933z M479.573,279.68
          h-1.706c0,3.413-3.413,6.827-5.12,6.827H189.44c-6.827,0-13.653,3.413-15.36,10.24c-3.413,6.827-1.707,13.653,3.413,18.774
          l78.507,76.8c1.707,1.707,1.707,5.12,0,8.534l-35.84,35.84c-1.707,1.707-5.12,3.413-8.534,0L35.84,260.906
          c-1.706-1.706-1.706-3.413-1.706-5.119c0-1.706,0-3.413,1.706-5.12L211.627,74.88c1.707-1.706,3.413-1.706,3.413-1.706
          c1.707,0,3.413,0,3.413,1.706L256,110.719c1.707,1.706,1.707,6.827,0,8.533l-75.093,76.8c-5.12,5.12-6.827,11.946-3.413,18.774
          c3.413,6.827,8.534,10.24,15.36,10.24h281.6c1.706,0,5.12,0,5.12,3.413V279.68z"/>
  </Arrow>
);

export default withTheme(ArrowIcon);
