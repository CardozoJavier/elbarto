import styled from 'styled-components';
import { Img } from './Img.styles';

export const Container = styled.div`
  position: relative;
  .iframe-container {
    border: none;
    min-width: unset;
    // height: 710px;
    // width: 343px;
    width: 20vw;
    height: 70vh;
    position: absolute;
    left: 35px;
    z-index: 0;
    top: 60px;
  }

  .image-container {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    // height: 736px;
    // width: 414px;
    width: 25vw;
    height: 80vh;
    left: 0;
  }

  .notch {
    position: absolute;
    width: 347px;
    height: 28px;
    background: white;
    left: 33px;
    top: 30px;
    border-radius: 35px 35px 0 0;
    padding: 10px 0 0 28px;
    p {
      margin: 0;
      font-weight: 900;
      width: fit-content;
    }
  }
`;

export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  max-width: 100%;
`;

export const Iframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`;
