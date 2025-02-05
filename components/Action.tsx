import Link from 'next/link';
import {
  ActionContainer,
  ActionLink,
  Button,
} from './styles/Action.styles';
import {
  LINK,
  BUTTON,
  ARROW_ICON,
} from '../utils/constants';
import { ArrowIcon } from './UI';

type Props = {
  type: string;
  text: string;
  href?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  passHref?: boolean;
  download?: boolean;
};

const getIcon = (icon: string) => {
  switch (icon) {
    case ARROW_ICON:
      return <ArrowIcon />;
    default:
      return;
  }
};

const renderLink = (text: string, href: string, icon?: string, passHref?: boolean, download?: boolean): React.ReactElement => (
  <Link href={href} passHref={passHref}>
    <ActionLink target={passHref ? '_blank' : ''} download={download}>
      {text}
      {icon && getIcon(icon)}
    </ActionLink>
  </Link>
);

const renderButton = (text: string, icon: string, onClick: () => void) => (
  <Button onClick={onClick}>
    {text}
    {icon && getIcon(icon)}
  </Button>
);

const renderAction = ({ type, text, href, icon, onClick, passHref, download }: Props): React.ReactElement => {
  switch (type) {
    case LINK:
      return renderLink(text, href, icon, passHref, download);
    case BUTTON:
      return renderButton(text, icon, onClick);
    default:
      return;
  }
};

const Action = ({ type, text, href, className, icon, onClick, passHref, download }: Props): React.ReactElement => (
  <ActionContainer className={className}>
    {renderAction({ type, text, href, icon, onClick, passHref, download })}
  </ActionContainer>
);

export default Action;
