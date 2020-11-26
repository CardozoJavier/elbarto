import Link from 'next/link';
import parse from 'html-react-parser';
import {
  BOLD,
  LINK,
  PROJECTS,
  TAKE_A_LOOK,
  CUSTOM_PROJECT_LINK,
  CUSTOM_PORTFOLIO_LINK,
  SECOND_PORTFOLIO_SECTION,
} from '../utils/constants';
import {
  Description,
  ProjectTitle,
  TextContainer,
  ProjectContainer,
  ProjectImg as Img,
  ProjectDescription,
  DescriptionContainer,
  PortfolioHeader as Header,
  PortfolioSection as Section,
} from './styles/Portfolio.styles';
import Action from './Action';
import { Card } from './UI';

const getTechnologies = ({ title, list }: Technologies) => (
  <>
    <p className={BOLD}>{title}</p>
    <ul>
      {list.map(tech => (
        <li>{tech}</li>
      ))}
    </ul>
  </>
);

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
      {projects.map(project => (
        <Card>
          <TextContainer>
            <ProjectContainer>
              <Action
                text={project.title}
                type={LINK}
                href={`/portfolio/${project.id}`}
                className={CUSTOM_PROJECT_LINK}
              />
              <ProjectDescription>{parse(project.description)}</ProjectDescription>
              {getTechnologies(project.technologies)}
            </ProjectContainer>
            <Link href={`/portfolio/${project.id}`}>
              <Img src={project.image} alt={project.alt} />
            </Link>
          </TextContainer>
        </Card>
      ))}
    </Section>
  </>
);

interface ActionProps {
  text: string
  href: string
  className: string
}
interface Section {
  title: string
  description: string
  image: string
  id?: string
  alt?: string
  className?: string
  action?: ActionProps
}

interface Technologies {
  title: string
  list: string[]
}

export interface Project extends Section {
  sections: Section[]
  technologies: Technologies
  className?: string
}

export interface PortfolioProps {
  title: string
  description: string
  projects: Project[]
  className: string
}

export default Portfolio;
