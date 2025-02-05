import styled from 'styled-components';
import { Section } from './Main.styles';

export const AboutSection = styled(Section)`
  justify-content: flex-start;
  padding: 5vh 5vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  img {
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    padding: 5vh 0 0 0;
    img {
      height: 50vw;
      width: 50vw;
    }
    align-items: center;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 0 5vw;

  @media (min-width: 768px) {
    max-width: 70%;
  }
`;

export const Header = styled.h2`
  font-size: 4vw;
  color: ${({ theme }) => theme.white.w08};
  max-width: 35vw;
  padding: 2vw;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.black.b05};
  margin: 0;
  
  @media (max-width: 767px) {
    font-size: 6vw;
    max-width: 75%;
    margin-top: 10%;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.black.b08};
  background-color: ${({ theme }) => theme.white.w65};
  letter-spacing: 1px;
  margin: 5vh 0 0 0;
  border-radius: 3px;
  padding: 2vh 2vw;
  font-weight: 600;
  font-size: 1.3vw;

  @media (max-width: 767px) {
    font-size: 4vw;
  }
`;
