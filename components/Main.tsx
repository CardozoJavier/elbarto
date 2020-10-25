import Link from 'next/link';
import {
  FIRST_SECTION,
  SECOND_SECTION,
} from '../utils/constants';
import {
  Title,
  Action,
  Section,
  Container,
  MainStyled,
  Description,
  TitleContainer,
  TitleDescription,
  DescriptionContainer,
} from './styles/Main.styles';

const Main = () => (
  <Container>
    <MainStyled>
      <Section className={FIRST_SECTION}>
        <TitleContainer>
          <Title>Front-end Developer.</Title>
        </TitleContainer>
        <Link href="/contact">
          <Action>Hire me today</Action>
        </Link>
      </Section>
      <Section className={SECOND_SECTION}>
        <img src="/images/profile.jpg" alt="profile image" />
        <DescriptionContainer>
          <TitleDescription>
            My passion and focus is front-end development
          </TitleDescription>
          <Description>
            Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).
          </Description>
        </DescriptionContainer>
      </Section>
    </MainStyled>
  </Container>
);

export default Main;
