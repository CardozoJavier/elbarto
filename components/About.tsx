import parse from 'html-react-parser';
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
  className: string;
}

const About = ({ title, description, className }: AboutProps): React.ReactElement => (
  <Section className={className}>
    <img src="/images/profile.jpg" alt={PROFILE_IMAGE} />
    <DescriptionContainer>
      <Header>
        {title}
      </Header>
      <Description>
        {parse(description)}
      </Description>
    </DescriptionContainer>
  </Section>
);

export default About;
