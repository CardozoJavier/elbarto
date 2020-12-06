import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';
import {
  HEADER_CONTAINER,
  CUSTOM_PROJECT_LINK,
  CUSTOM_PORTFOLIO_LINK,
  PORTFOLIO_LAPTOP_IMAGE,
  SECOND_PORTFOLIO_SECTION,
  CUSTOM_DESCRIPTION_CONTAINER,
} from '../../utils/constants';
import { Img } from '../UI/styles/Img.styles';
import { ActionLink } from './Action.styles';

export const Container = styled.div``;

export const PortfolioSection = styled(ResumeSection)`
  @media (max-width: 767px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      padding: 20px;
      margin: 0;
      margin-bottom: 58px;
      background-color: white;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    .${PORTFOLIO_LAPTOP_IMAGE} {
      margin-top: 0;
      max-width: 45%;
    }
    .${HEADER_CONTAINER} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    &.${SECOND_PORTFOLIO_SECTION} {
      flex-direction: column;
    }
  }
`;

export const PortfolioHeader = styled(Header)``;

export const Description = styled.p`
  @media (min-width: 768px) {
    color: ${({ theme }) => theme.black.b08};
    max-width: 75%;
    font-size: 1.3vw;
  }
`;

export const DescriptionContainer = styled.div`
  background-color: ${({ theme }) => theme.white.w08};
  border-radius: 3px;
  margin: 24px 0;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20vh;
    padding: 2vw;
    .${CUSTOM_PORTFOLIO_LINK} {
      margin: 0 0 25px 0;
      align-self: unset;
      ${ActionLink} {
        padding: 0;
        margin-left: 0;
        color: ${({ theme }) => theme.orange.o40};
      }
    }
  }  
  @media (min-width: 768px) {
    display: flex;
    padding: 20px;
    align-items: center;
    max-width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .${CUSTOM_PORTFOLIO_LINK} {
      margin-left: 16px;
      align-self: unset;
      ${ActionLink} {
        padding: 0;
        color: ${({ theme }) => theme.orange.o40};
      }
    }
  }
  &.${CUSTOM_DESCRIPTION_CONTAINER} {
    max-width: unset;
    background-color: ${({ theme }) => theme.black.b01};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 768px) {
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
`;

export const ProjectImg = styled(Img)`
  @media (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    max-height: 215px;
  }
  &:hover {
    cursor: pointer;
  }
`;
