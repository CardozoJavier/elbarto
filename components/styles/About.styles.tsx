import styled from 'styled-components';
import {
  Section
} from './Main.styles';

export const AboutSection = styled(Section)`
  justify-content: flex-start;
  padding: 5vh 5vw;
  display: flex;
  align-items: center;
  img {
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    max-width: 500px;
    max-height: 500px;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 6vh 5vw;
`;

export const Header = styled.h2`
  font-size: 3vw;
  color: ${({ theme }) => theme.white.w08};
  max-width: 30vw;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white.w08};
  letter-spacing: 1px;
  margin: 5vh 0;
  max-width: 25vw;
`;