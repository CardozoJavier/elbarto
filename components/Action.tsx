import Link from 'next/link';
import {
  ActionContainer,
  ActionLink,
} from './styles/Action.styles';
import {
  LINK,
  BUTTON,
  ARROW_ICON,
} from '../utils/constants';
import { ArrowIcon } from './UI';

const getIcon = (icon) => {
  switch (icon) {
    case ARROW_ICON:
      return <ArrowIcon />;
    default:
      return;
  }
};

const renderLink = (text: string, href: string, icon: string): React.ReactElement => (
  <Link href={href}>
    <ActionLink>
      {text}
      {icon && getIcon(icon)}
    </ActionLink>
  </Link>
);

const renderButton = (text: string, onClick: () => void) => (
  <button onClick={onClick}>{text}</button>
);

const renderAction = (type: string, text: string, href: string, icon: string, onClick: () => void): React.ReactElement => {
  switch (type) {
    case LINK:
      return renderLink(text, href, icon);
    case BUTTON:
      return renderButton(text, onClick);
    default:
      return;
  }
};

type Props = {
  type: string;
  text: string;
  href?: string;
  icon?: string;
  className: string;
  onClick?: () => void;
};

const Action = ({ type, text, href, className, icon, onClick }: Props): React.ReactElement => (
  <ActionContainer className={className}>
    {renderAction(type, text, href, icon, onClick)}
  </ActionContainer>
);

export default Action;
