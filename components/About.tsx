import parse from 'html-react-parser';
import Image from 'next/image';
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
    <Image src="/images/profile.jpg" alt={PROFILE_IMAGE} width="500" height="500" priority />
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
