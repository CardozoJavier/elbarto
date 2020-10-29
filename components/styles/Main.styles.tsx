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
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: 50vw;
`;

export  const Title = styled.h1`
  font-size: 10vw;
  font-family: 'Roboto Slab', serif;
  color: ${({ theme }) => theme.white.w08};
  margin: 0;
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

export const MainImage = styled(Image)`
  width: 100%;
`;
