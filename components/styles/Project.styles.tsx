import styled from 'styled-components';
import { ResumeSection } from './Resume.styles';
import { Header } from './About.styles';
import {
  MAX_WIDTH_50,
  CUSTOM_SECTION_1,
  CUSTOM_PROJECT_LINK,
  SECOND_PORTFOLIO_SECTION
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
      min-height: unset;

      flex-direction: row;
      justify-content: space-around;
      div.${MAX_WIDTH_50} {
        max-width: 50%;
      }
      div.${CUSTOM_SECTION_1} {
        max-width: 100%;
        background-color: #1e1e1e;
      }
      &.technologies {
        flex-direction: row-reverse;
        div > h2 {
          margin-left: auto;
        }
      }
    }
    &.${CUSTOM_SECTION_1} {
      flex-direction: column-reverse;
      padding: 0;
      padding-bottom: 150px;
    }
  }
`;

export const ProjectHeader = styled(Header)``;

export const ProjectDescription = styled(Description)`
  background-color: unset;
  padding: 0;
  border-radius: 0;
  max-width: unset;
  display: inline;
  margin: 0;
`;

export const DescriptionContainer = styled(PortfolioDescriptionContainer)`
  @media (min-width: 768px) {
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
