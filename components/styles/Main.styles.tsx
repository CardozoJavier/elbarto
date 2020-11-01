import styled from 'styled-components';
import media from '../../utils/media'
import { Item } from './Header.styles';
import { Image } from '../UI/styles/UI.styles';

export const Container = styled.div`
  @media (max-width: 3840px) {
    padding: 5vh 5vw;
  }
`;

export const MainStyled = styled.main``;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  
  &.right-to-left-animation {
    animation: turn-left .5s;
    @keyframes turn-left {
      from {
        transform: translateX(2vw);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  &.left-to-right-animation {
    animation: turn-right .5s;
    @keyframes turn-right {
      from {
        transform: translateX(-2vw);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  &.default-animation {
    opacity: 0;
    animation: turn-default .5s;
    animation-delay: 1.5s;

    // Preserve styles after animation
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    animation-fill-mode: forwards;  

    @keyframes turn-default {
      from {
        transform: translateY(-2vw);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: 50vw;

  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export  const Title = styled.h1`
  font-size: 10vw;
  font-family: 'Roboto Slab', serif;
  color: ${({ theme }) => theme.white.w08};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15vw;
  }
`;

export  const Action = styled(Item)`
  color: ${({ theme }) => theme.white.w08};
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.orange.o100};
  &:hover {
    color: ${({ theme }) => theme.white.w100};
    background-color: ${({ theme }) => theme.orange.o100};
  }
`;

export const Video = styled.video`
  position: relative;
  top: -202px;
  left: 52px;
  background: #1e1c1f;
  border-radius: 5px;
`;

export const MainImageContainer = styled.div`
  background: #1c1c1c;
  position: absolute;
  top: 5%;
  left: 14%;
  width: 72%;
  padding: 3px 3px 3.5% 3px;
`;

export const MainImage = styled(Image)`
  width: 100%;
`;

export const ComposeContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  max-width: 32%;
  margin-top: 9vw;
  height: fit-content;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
