import {
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
      </Section>
    </MainStyled>
  </Container>
);

export default Main;
