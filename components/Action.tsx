import Link from 'next/link';
import {
  ActionContainer,
  ActionLink,
} from './styles/Action.styles';
import {
  LINK,
  BUTTON
} from '../utils/constants';

const renderLink = (text: string, href: string): React.ReactElement => (
  <Link href={href}>
    <ActionLink>{text}</ActionLink>
  </Link>
);

const renderButton = (text: string, onClick: () => void) => (
  <button onClick={onClick}>{text}</button>
);

const renderAction = (type: string, text: string, href: string, onClick: () => void): React.ReactElement => {
  switch (type) {
    case LINK:
      return renderLink(text, href);
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
  className: string;
  onClick?: () => void;
};

const Action = ({ type, text, href, className, onClick }: Props): React.ReactElement => (
  <ActionContainer className={className}>
    {renderAction(type, text, href, onClick)}
  </ActionContainer>
);

export default Action;
