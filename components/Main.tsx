import {
  Video,
  MainImage,
  Title,
  Section,
  Container,
  MainStyled,
  TitleContainer,
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
        <div>
          <MainImage style={{ width: '100%' }} src="/images/laptop.png" alt="laptop-image" />
          <Video width="73%" height="170" autoPlay muted loop>
            <source src="/images/video.mov" />
          </Video>
        </div>
      </Section>
    </MainStyled>
  </Container>
);

export default Main;
