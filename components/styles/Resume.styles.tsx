import styled from 'styled-components';
import { Section } from './Main.styles';
import { Header } from './About.styles';
import { WrapperContainer } from './Wrapper.styles';

export const ResumeSection = styled(Section)`
  @media (max-width: 767px) {
    margin: 33px 20px 58px 20px;
    align-items: flex-start;
    margin-bottom: 58px;
    min-height: calc(100vh - 34px);
    justify-content: flex-start;
    &.second-resume-section {
      padding: 0;
      margin: 0;
      margin-bottom: 58px;
      background-color: white;
    }
  } 
  @media (min-width: 768px) {
    padding: 10vh 5vw;
    flex-direction: column;
    min-height: calc(var(--vh) - 129px);
    justify-content: flex-start;
    margin: 0;

    &.second-resume-section, &.second-portfolio-section {
      background-color: white;
      min-height: var(--vh);
      ${WrapperContainer} {
        padding: 0;
      }
    }
  }
`;

export const ResumeHeader = styled(Header)`
  @media (min-width: 768px) {
    font-size: 7vw;
  }

  @media (max-width: 767px) {
    max-width: unset;
    font-size: 10vw;
    width: 100%;
  }
`;
  
export const Title = styled.h3`
  @media (min-width: 768px) {
    margin: 0;
    font-size: 3vw;
    min-width: 33%;

    &.custom-title {
      width: auto;
      font-size: 16px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 767px) {
    &.section-title {
      font-size: 1.5rem;
    }
    &.margin-20 {
      margin: 20px;
    }
  }
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 900;

  &.custom-subtitle {
    text-transform: none;
  }

  @media (max-width: 767px) {
    span.divisor {
      display: none;
    }
    span.block {
      display: block;
    }
  }
`;

export const Ul = styled.ul`
  margin: 0;
  list-style: disc;
  @media (min-width: 768px) {
    width: 100%;
    min-width: 33%;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const Li = styled.li`
  list-style-position: inside;
  margin: 10px 0;
  &.custom-list-item {
    list-style: circle;
    list-style-position: inside;
  }
  a {
    color: ${({ theme }) => theme.orange.o40};
    text-decoration: none;
    transition: all .3s;
    &:hover {
      color: ${({ theme }) => theme.orange.o60};
      cursor: pointer;
    }
  }

  @media (max-width: 767px) {
    span.course-year, span.divisor {
      display: none;
    }
  }
`;

export const RowContainer = styled.div`
  margin: 10vh 0;
  &:first-of-type {
    margin-top: 0;
  }
  @media (min-width: 768px) {
  }
  a {
    color: ${({ theme }) => theme.orange.o40};
    text-decoration: none;
    transition: all .3s;
    &:hover {
      color: ${({ theme }) => theme.orange.o60};
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    ${Ul} {
      padding: 0 20px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const SubSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10vh 0;
  &:first-of-type {
    margin-top: 0;
  }
  span.bold-text {
    font-weight: 900;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 5vh 0;

    span.bold-text {
      display: block;
      margin-left: 20px;
    }

    &.custom-padding {
      padding: 0 20px;
    }
  }
`;


export const TitleContainer = styled.div`
  margin-bottom: 3vh;
  background-color: ${({ theme }) => theme.black.b08};
  color: ${({ theme }) => theme.white.w100};
  @media (min-width: 768px) {
    border-radius: 3px;
    padding: 5px;
  }
  @media (max-width: 767px) {
    border-radius: 0;
    padding: 10px 20px;
  }
`;

export const Description = styled.p``;
