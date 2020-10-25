import {
  AboutSection as Section,
  DescriptionContainer,
  Header,
  Description,
} from './styles/About.styles';
import { PROFILE_IMAGE } from '../utils/constants';

export interface AboutProps {
  title: string;
  description: string;
}

const About = ({ title, description }: AboutProps): React.ReactElement => (
  <Section>
    <img src="/images/profile.jpg" alt={PROFILE_IMAGE} />
    <DescriptionContainer>
      <Header>
        {title}
      </Header>
      <Description>
        {description}
      </Description>
    </DescriptionContainer>
  </Section>
);

export default About;
