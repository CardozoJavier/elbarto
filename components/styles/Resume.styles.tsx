import styled from 'styled-components';
import { Section } from './Main.styles';
import { Header } from './About.styles';
import { WrapperContainer } from './Wrapper.styles';

export const ResumeSection = styled(Section)`
  @media (min-width: 768px) {
    padding: 10vh 5vw;
    flex-direction: column;
    min-height: calc(var(--vh) - 96px);
    justify-content: flex-start;
    margin: 0;

    &.second-resume-section {
      background-color: white;
      min-height: var(--vh);
      ${WrapperContainer} {
        padding: 0;
      }
    }
  }
`;

export const ResumeHeader = styled(Header)`
  font-size: 7vw;
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
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 900;

  &.custom-subtitle {
    text-transform: none;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  list-style: disc;
  @media (min-width: 768px) {
    width: 100%;
    min-width: 33%;
  }
`;

export const Li = styled.li`
  list-style-position: inside;
  margin: 10px 0;
  &.custom-list-item {
    list-style: circle;
    list-style-position: inside;
  }
`;

export const RowContainer = styled.div`
  @media (min-width: 768px) {
    margin: 10vh 0;
    &:first-of-type {
      margin-top: 0;
    }
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
`;


export const TitleContainer = styled.div`
  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.black.b08};
    color: ${({ theme }) => theme.white.w100};
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 3vh;
  }
`;

export const Description = styled.p``;
