import parse from 'html-react-parser';
import Action from './Action';
import {
  MARGIN_20,
  ARROW_ICON,
  CUSTOM_TITLE,
  ARROW_BUTTON,
  SECTION_TITLE,
  CUSTOM_PADDING,
  DOWNLOAD_RESUME,
  CUSTOM_SUBTITLE,
  SECOND_RESUME_SECTION,
  LINK,
} from '../utils/constants';
import {
  Li,
  Ul,
  Title,
  Subtitle,
  SubSection,
  RowContainer,
  TitleContainer,
  ResumeHeader as Header,
  ResumeSection as Section,
} from './styles/Resume.styles';

const renderUnorderList = (list: string[]): React.ReactElement => (
  <Ul>
    {
      Array.isArray(list)
        ? list.map(itemList => <Li>{parse(itemList)}</Li>)
        : null
    }
  </Ul>
);

const renderTechnologies = ({ title, comfortable, experience }: Technologies): React.ReactElement => (
  <>
    <Title className={SECTION_TITLE}>{title}</Title>
    <Ul>
      <Subtitle>{comfortable.title}</Subtitle>
      {Array.isArray(comfortable.list)
        ? comfortable.list.map(tech => <Li>{tech}</Li>)
        : null}
    </Ul>
    <Ul>
      <Subtitle>{experience.title}</Subtitle>
      {Array.isArray(experience.list)
        ? experience.list.map(tech => <Li>{tech}</Li>)
        : null}
    </Ul>
  </>
);

const renderSectionRow = ({ title, row }: RowSection): React.ReactElement => (
  <>
    <Title className={`${SECTION_TITLE} ${MARGIN_20}`}>{title}</Title>
    <Ul>
      {Array.isArray(row)
        ? row.map(item => (
          <RowContainer>
            <TitleContainer>
              <Title className={CUSTOM_TITLE}>{item.title}</Title>
              <Subtitle className={CUSTOM_SUBTITLE}>{parse(item.subtitle)}</Subtitle>
            </TitleContainer>
            {renderUnorderList(item.description)}
            {
              item.project ?
              <span className="custom-li">
                <Title className={`${CUSTOM_TITLE} ${MARGIN_20}`}>{item.project.title}</Title>
                {renderUnorderList(item.project.list)}
              </span>
              : null
            }
          </RowContainer>
        ))
        : null
      }
    </Ul>
  </>
);

const Resume = ({
  title,
  technologies,
  experience,
  education,
  course,
  className
}: ResumeProps): React.ReactElement => {
  const handleDownloadClick = (): void => {
    window.open('/images/resume.pdf')
  };

  return (
    <>
      <Section className={className}>
        <Header>{title}</Header>
        <Action
          href='/images/Frontend developer - Javier Cardozo.pdf'
          download={true}
          passHref={true}
          text={DOWNLOAD_RESUME}
          icon={ARROW_ICON}
          type={LINK}
          className={ARROW_BUTTON}
        />
      </Section>
      <Section className={SECOND_RESUME_SECTION}>
        <SubSection className={CUSTOM_PADDING}>
          {renderTechnologies(technologies)}
        </SubSection>
        <SubSection>
          {renderSectionRow(experience)}
        </SubSection>
        <SubSection>
          {renderSectionRow(education)}
        </SubSection>
        <SubSection className={CUSTOM_PADDING}>
          <Title className={SECTION_TITLE}>{course.title}</Title>
          {renderUnorderList(course.list)}
        </SubSection>
      </Section>
    </>
  );
};

interface TechnologiesColumn {
  title: string
  list: string[]
}

interface Technologies {
  title: string
  comfortable: TechnologiesColumn
  experience: TechnologiesColumn
}

interface TitleList {
  title: string
  list: string[]
}

interface Row {
  title: string
  subtitle: string
  description: string[]
  project?: TitleList
}

interface RowSection {
  title: string
  row: Row[]
}

export interface ResumeProps {
  title: string
  technologies: Technologies
  experience: RowSection
  education: RowSection
  course: TitleList
  className: string
}

export default Resume;
