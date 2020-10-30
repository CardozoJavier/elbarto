import {
  Title,
  Section,
  Container,
  MainImage,
  MainStyled,
  TitleContainer,
  ComposeContainer,
  MainImageContainer,
} from './styles/Main.styles';

export interface MainProps {
  title: string
  className: string
}

const Main = ({ title, className }: MainProps) => (
  <Container>
    <MainStyled>
      <Section className={className}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <ComposeContainer>
          <MainImage src="/images/laptop.png" alt="laptop-image" />
          <MainImageContainer>
            <MainImage src="/images/video.gif" alt="coding-gif" />
          </MainImageContainer>
        </ComposeContainer>
      </Section>
    </MainStyled>
  </Container>
);

export default Main;
