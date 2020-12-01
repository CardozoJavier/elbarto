import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';
import {
  KNOWLEDGE,
  TECHNOLOGIES,
  MAX_WIDTH_50,
  ABOUT_PROJECT,
  CUSTOM_SECTION_1,
  CUSTOM_PROJECT_LINK,
  ABOUT_LANDING_PROJECT,
  SECOND_SECTION_HEADER,
  SECOND_PORTFOLIO_SECTION,
  CUSTOM_DESCRIPTION_CONTAINER,
  SECTION_DESCRIPTION_CONTAINER,
} from '../../utils/constants';
import {
  ProjectImg,
  Description,
  DescriptionContainer as PortfolioDescriptionContainer
} from './Portfolio.styles';

export const Container = styled.div``;

export const ProjectSection = styled(ResumeSection)`
  @media (min-width: 768px) {
    &.${SECOND_PORTFOLIO_SECTION} {
      .${ABOUT_LANDING_PROJECT} {
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
      &.${TECHNOLOGIES}, &.landing-technologies {
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
      &.${KNOWLEDGE} {
        padding-bottom: 15vh;
        flex-direction: column-reverse;
        div.${KNOWLEDGE}:nth-of-type(2) {
          margin-bottom: 150px;
          max-width: none;
          img {
            max-height: unset;
          }
        }
      }
      div.${MAX_WIDTH_50} {
        max-width: 50%;
      }
      div.${CUSTOM_SECTION_1} {
        max-width: 100%;
        background-color: #1e1e1e;
      }
      &.about-landing-project {
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

export const Img = styled(ProjectImg)`
  @media (min-width: 768px) {
    max-width: 100%;
    &.${CUSTOM_SECTION_1} {
      max-height: 734px;
      &:hover {
        cursor: default;
      }
    }
  }
`;
