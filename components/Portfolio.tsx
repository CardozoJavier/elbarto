import Link from 'next/link';
import parse from 'html-react-parser';
import {
  BOLD,
  LINK,
  PROJECTS,
  TAKE_A_LOOK,
  PORTFOLIO_CARD,
  HEADER_CONTAINER,
  CUSTOM_PROJECT_LINK,
  CUSTOM_PORTFOLIO_LINK,
  PORTFOLIO_LAPTOP_IMAGE,
  SECOND_PORTFOLIO_SECTION,
} from '../utils/constants';
import {
  Description,
  TextContainer,
  ProjectContainer,
  ProjectImg as Img,
  ProjectDescription,
  DescriptionContainer,
  PortfolioHeader as Header,
  PortfolioSection as Section,
} from './styles/Portfolio.styles';
import Action from './Action';
import {
  Card,
  LaptopImage,
} from './UI';
import WIP from './WIP';

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
      <LaptopImage className={PORTFOLIO_LAPTOP_IMAGE} />
      <div className={HEADER_CONTAINER}>
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
      </div>
    </Section>
    <Section className={SECOND_PORTFOLIO_SECTION} id={PROJECTS}>
      {projects.map(project => (
        <Card className={PORTFOLIO_CARD}>
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
      <WIP />
    </Section>
  </>
);

interface ActionProps {
  text: string
  href: string
  className: string
}

interface Iframe {
  src: string
}
interface Section {
  title: string
  description: string
  image: string
  id?: string
  alt?: string
  className?: string
  action?: ActionProps
  iframe?: Iframe
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
