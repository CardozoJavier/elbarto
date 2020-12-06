import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';
import {
  KNOWLEDGE,
  TECHNOLOGIES,
  MAX_WIDTH_50,
  ABOUT_PROJECT,
  CUSTOM_SECTION_1,
  LANDING_KNOWLEDGE,
  CUSTOM_PROJECT_LINK,
  LANDING_TECHNOLOGIES,
  ABOUT_LANDING_PROJECT,
  SECOND_SECTION_HEADER,
  SECOND_PORTFOLIO_SECTION,
  CUSTOM_DESCRIPTION_CONTAINER,
  SECTION_DESCRIPTION_CONTAINER,
  LANDING_TECHNOLOGIES_ACCESSORY,
} from '../../utils/constants';
import {
  ProjectImg,
  Description,
  ProjectContainer as PortfolioProjectContainer,
  DescriptionContainer as PortfolioDescriptionContainer
} from './Portfolio.styles';

export const Container = styled.div``;

export const ProjectSection = styled(ResumeSection)`
  @media (max-width: 767px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      margin-bottom: 0;
      margin: 0;
      background-color: white;
      min-height: unset;
      &:last-of-type {
        padding-bottom: 15vh;
      }
    }
  }
  @media (min-width: 768px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      .${ABOUT_LANDING_PROJECT}, .${LANDING_KNOWLEDGE} {
        img {
          border-radius: 3px;
          box-shadow: 0px 0px 6px 6px rgba(0,0,0,0.1);
        }
      }
      div.${SECTION_DESCRIPTION_CONTAINER} {
        margin: 25px 0;
      }
      &:last-of-type {
        padding-bottom: 20vh;
      }
    }
  }
  @media (max-width: 1199px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      padding: 5vh 5vw;
      div.landing-technologies:nth-of-type(2) {
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 1200px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      &:last-of-type {
        padding-bottom: 20vh;
      }
      min-height: unset;
      flex-direction: row;
      justify-content: space-around;

      &.${ABOUT_PROJECT} {
        div.${CUSTOM_DESCRIPTION_CONTAINER} {
          max-width: 100%;
        }
      }
      &.${TECHNOLOGIES}, &.${LANDING_TECHNOLOGIES} {
        flex-direction: row-reverse;
        div > h2 {
          margin-left: auto;
        }
        div.${SECTION_DESCRIPTION_CONTAINER} {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
      &.${KNOWLEDGE}, &.${LANDING_KNOWLEDGE} {
        padding-bottom: 15vh;
        flex-direction: column-reverse;
        div.${KNOWLEDGE}:nth-of-type(2), div.${LANDING_KNOWLEDGE}:nth-of-type(2) {
          margin: 0 auto;
          max-width: none;
          img {
            max-height: unset;
          }
        }
        div.${LANDING_KNOWLEDGE}:nth-of-type(2) {
          margin-bottom: 100px;
        }
      }
      div.${MAX_WIDTH_50} {
        max-width: 50%;
      }
      div.${CUSTOM_SECTION_1} {
        max-width: 100%;
        background-color: #1e1e1e;
      }
      &.${ABOUT_LANDING_PROJECT} {
       justify-content: space-between; 
      }
    }
    &.${CUSTOM_SECTION_1} {
      flex-direction: column-reverse;
      padding: 0;
      padding-bottom: 150px;
    }
  }
`;

export const ProjectHeader = styled(Header)`
  @media (max-width: 1199px) {
    &.${SECOND_SECTION_HEADER} {
      max-width: unset;
    }
  }
`;

export const ProjectDescription = styled(Description)`
  background-color: unset;
  padding: 0;
  border-radius: 0;
  max-width: unset;
  display: inline;
  margin: 0;
  @media (max-width: 1199px) {
    max-width: unset;
  }
`;

export const DescriptionContainer = styled(PortfolioDescriptionContainer)`
  @media (min-width: 768px) {
    max-width: 50%;
    &.${CUSTOM_DESCRIPTION_CONTAINER} {
      max-width: 42vw;
    }
    justify-content: flex-start;
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

export const ProjectContainer = styled(PortfolioProjectContainer)``;

export const Img = styled(ProjectImg)`
  @media (max-width: 767px) {
    &.${LANDING_TECHNOLOGIES_ACCESSORY} {
      display: none;
    }
  }
  @media (min-width: 768px) {
    max-width: 100%;
    &.${CUSTOM_SECTION_1} {
      max-height: 734px;
      &:hover {
        cursor: default;
      }
    }
    &.${LANDING_TECHNOLOGIES} {
      display: none;
    }
    &.${LANDING_TECHNOLOGIES_ACCESSORY} {
      position: relative;
      top: 35px;
      right: 45px;
      transform: rotate(45deg);
      height: 100px;
    }
  }
`;
