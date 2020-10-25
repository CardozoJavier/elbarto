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
  height: calc(90vh - 338px);
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: 50vw;
`;

export  const Title = styled.h1`
  font-size: 7vw;
  font-family: 'Roboto Slab', serif;
  color: ${({ theme }) => theme.white.w08};
  margin-top: 0;
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
