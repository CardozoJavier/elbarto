import styled from 'styled-components';
import { Img } from './Img.styles';

export const Container = styled.div`
  position: relative;
  height: 648px;
  width: 380px;
  margin: 50px;
  .iframe-container {
    border: none;
    min-width: unset;
    width: 320px;
    height: 568px;
    position: absolute;
    left: 28px;
    z-index: 0;
    top: 60px;
  }

  .image-container {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    width: 380px;
    height: 648px;
    left: 0;
  }

  .notch {
    position: absolute;
    width: 318px;
    height: 45px;
    background: white;
    left: 30px;
    top: 22px;
    border-radius: 35px 35px 0 0;
    padding: 10px 0 0 28px;
    p {
      margin: 0;
      font-weight: 900;
      font-size: 14px;
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
