import {
  Title,
  Section,
  Container,
  MainStyled,
  TitleContainer,
} from './styles/Main.styles';
import { useContext } from 'react';
import Context from '../context';

export interface MainProps {
  className: string
}

const Main = ({ className }: MainProps) => {
  const { main } = useContext(Context);
  const { title } = main || {};

  return (
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
}

export default Main;
