import parse from 'html-react-parser';
import {
  GHOST,
  CUSTOM_TITLE,
  CUSTOM_SUBTITLE,
  CUSTOM_LIST_ITEM,
  SECOND_RESUME_SECTION,
  DOWNLOAD_RESUME,
} from '../utils/constants';
import {
  ResumeSection as Section,
  ResumeHeader as Header,
  Title,
  Subtitle,
  Ul,
  Li,
  RowContainer,
  SubSection,
  TitleContainer,
} from './styles/Resume.styles';
import Button from './UI/Button';

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
    <Title>{title}</Title>
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
    <Title>{title}</Title>
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
              <>
                <Title className={CUSTOM_TITLE}>{item.project.title}</Title>
                {renderUnorderList(item.project.list)}
              </>
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
        <Button label={DOWNLOAD_RESUME} type={GHOST} onClick={handleDownloadClick} />
      </Section>
      <Section className={SECOND_RESUME_SECTION}>
        <SubSection>
          {renderTechnologies(technologies)}
        </SubSection>
        <SubSection>
          {renderSectionRow(experience)}
        </SubSection>
        <SubSection>
          {renderSectionRow(education)}
        </SubSection>
        <SubSection>
          <Title>{course.title}</Title>
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
