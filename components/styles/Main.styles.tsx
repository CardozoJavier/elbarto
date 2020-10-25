import styled from 'styled-components';
import media from '../../utils/media'
import { Item } from './Header.styles';

export const Container = styled.div`
  ${media.extraLarge`
    padding: 5vh 5vw;
  `};
`;

export const MainStyled = styled.main``;

export const Section = styled.section`
  &.first-section {
    height: calc(95vh - 198px);
  } 
  &.second-section {
    padding: 5vh 5vw;
    display: flex;
    img {
      border-radius: 50%;
      max-width: 35vw;
      max-height: 35vw;
    } 
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: 50vw;
`;

export  const Title = styled.h1`
  font-size: 8vw;
  font-family: 'Roboto Slab', serif;
  color: ${({ theme }) => theme.white.w08};
  margin-top: 0;
`;

export  const Action = styled(Item)`
  color: ${({ theme }) => theme.white.w08};
  background-color: ${({ theme }) => theme.orange.o50};
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.orange.o100};
  &:hover {
    color: ${({ theme }) => theme.white.w100};
    background-color: ${({ theme }) => theme.orange.o100};
  }
`;

export const DescriptionContainer = styled.div`
  padding: 5vh 5vw;
`;

export const TitleDescription = styled.h2`
  font-size: 3vw;
  color: ${({ theme }) => theme.white.w08};
  max-width: 35vw;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white.w08};
  letter-spacing: 1px;
`;
