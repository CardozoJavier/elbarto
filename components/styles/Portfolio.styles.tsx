import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';
import { CUSTOM_PROJECT_LINK, CUSTOM_PORTFOLIO_LINK, CUSTOM_DESCRIPTION_CONTAINER } from '../../utils/constants';
import { Img } from '../UI/styles/Img.styles';

export const Container = styled.div``;

export const PortfolioSection = styled(ResumeSection)`
  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const PortfolioHeader = styled(Header)``;

export const Description = styled.p`
  @media (min-width: 768px) {
    // background-color: ${({ theme }) => theme.white.w08};
    color: ${({ theme }) => theme.black.b08};
    // padding: 20px;
    // border-radius: 3px;
    max-width: 75%;
  }
`;

export const DescriptionContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.white.w08};
    padding: 20px;
    border-radius: 3px;
    max-width: 50%;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .${CUSTOM_PORTFOLIO_LINK} {
      margin-left: 16px;
      align-self: unset;
      a {
        padding: 0;
        color: ${({ theme }) => theme.orange.o40};
      }
    }

    &.${CUSTOM_DESCRIPTION_CONTAINER} {
      max-width: unset;
      background-color: ${({ theme }) => theme.black.b01};
    }
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProjectTitle = styled.p`
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
`;

export const ProjectDescription = styled.p`
  
`;

export const ProjectContainer = styled.div`
  @media (min-width: 768px) {
    .${CUSTOM_PROJECT_LINK} {
      a {
        font-weight: 900;
        font-size: 22px;
        margin: 16px 0;
        padding: 0;
        color: ${({ theme }) => theme.orange.o40};
        &:hover {
          color: ${({ theme }) => theme.orange.o50};
        }
      }
    }
  }
`;

export const ProjectImg = styled(Img)`
  &:hover {
    cursor: pointer;
  }
`;
