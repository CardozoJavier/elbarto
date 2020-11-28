import {
  Title,
  Section,
  Container,
  MainStyled,
  TitleContainer,
} from './styles/Main.styles';
import { LaptopImage } from './UI';

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
        <LaptopImage />
      </Section>
    </MainStyled>
  </Container>
);

export default Main;
