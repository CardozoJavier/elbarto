import parse from 'html-react-parser';
import {
  Img,
  Container,
  DescriptionContainer,
  ProjectHeader as Header,
  ProjectSection as Section,
  ProjectDescription as Description,
} from './styles/Project.styles';
import { Project as ProjectProps } from './Portfolio';
import Action from './Action';
import {
  INFO,
  LINK,
  MAX_WIDTH_50,
  LETS_DEEP_DIVE,
  CUSTOM_SECTION_1,
  CUSTOM_PORTFOLIO_LINK,
  SECOND_PORTFOLIO_SECTION,
  CUSTOM_DESCRIPTION_CONTAINER,
} from '../utils/constants';

const renderSectionAction = ({ text, href, className }, id) => {
  const finalHref = `/portfolio/${id}/#${href}`;
  return (
    <Action
      type={LINK}
      text={text}
      href={finalHref}
      className={className}
    />
  );
};

const Project = ({
  id,
  title,
  description,
  image,
  alt,
  technologies,
  sections,
}: ProjectProps): React.ReactElement => (
  <Container>
    <Section>
      <Header>{`Let's deep dive into the ${title} project`}</Header>
      <DescriptionContainer>
        <Description>{description}</Description>
        {renderSectionAction({
          text: LETS_DEEP_DIVE,
          href: sections[0].id,
          className: CUSTOM_PORTFOLIO_LINK
          }, id)
        }
        {/* <Action
          type={LINK}
          text={LETS_DEEP_DIVE}
          href={`/portfolio/${id}#${sections[0].id}`}
          className={CUSTOM_PORTFOLIO_LINK}
        /> */}
      </DescriptionContainer>
    </Section>
    {Array.isArray(sections) &&
      sections.map(section => (
        <Section id={INFO} className={`${SECOND_PORTFOLIO_SECTION} ${section.className}`}>
          <div>
            {section.title ? <Header>{section.title}</Header> : null}
            {section.description ?
              <DescriptionContainer className={CUSTOM_DESCRIPTION_CONTAINER}>
                <Description>{parse(section.description)}</Description>
              </DescriptionContainer>
              : null
            }
          </div>
          <div className={`${MAX_WIDTH_50} ${section.className}`}>
            <Img src={section.image} alt="project image" className={CUSTOM_SECTION_1} />
          </div>
          {section.action && renderSectionAction(section.action, id)}
        </Section>
      ))
    }
  </Container>
);

export default Project;