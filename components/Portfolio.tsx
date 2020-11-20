import {
  LINK,
  PROJECTS,
  TAKE_A_LOOK,
  CUSTOM_PORTFOLIO_LINK,
  SECOND_PORTFOLIO_SECTION,
} from '../utils/constants';
import {
  Description,
  DescriptionContainer,
  PortfolioHeader as Header,
  PortfolioSection as Section,
} from './styles/Portfolio.styles';
import Action from './Action';

const Portfolio = ({
  title,
  description,
  projects,
  className,
}: PortfolioProps): React.ReactElement => (
  <>
    <Section className={className}>
      <Header>{title}</Header>
      <DescriptionContainer>
        <Description>{description}</Description>
        <Action
          text={TAKE_A_LOOK}
          type={LINK}
          href={`#${PROJECTS}`}
          className={CUSTOM_PORTFOLIO_LINK}
        />
      </DescriptionContainer>
    </Section>
    <Section className={SECOND_PORTFOLIO_SECTION} id={PROJECTS}>
      <p>{title}</p>
      <p>{description}</p>
      <ul>
        {projects.map(project => (
          <li>
            <p>{project.title}</p>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  </>
);

interface Section {
  title: string
  description: string
  image: string
}

interface Project extends Section {
  sections: Section[]
}

export interface PortfolioProps {
  title: string
  description: string
  projects: Project[]
  className: string
}

export default Portfolio;
