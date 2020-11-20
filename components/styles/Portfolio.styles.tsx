import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';

export const Container = styled.div``;

export const PortfolioSection = styled(ResumeSection)``;

export const PortfolioHeader = styled(Header)``;

export const Description = styled.p`
  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.white.w08};
    color: ${({ theme }) => theme.black.b08};
    padding: 20px;
    border-radius: 3px;
    max-width: 50%;
  }
`;

export const DescriptionContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    .custom-portfolio-link {
      align-self: unset;
      margin-left: 50px;
    }
  }
`;
