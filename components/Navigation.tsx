import Action from './Action';
import {
  Container,
} from './styles/Navigation.styles';
import {
  LINK,
  ONLY_PREV,
  ONLY_NEXT,
  ARROW_ICON,
  PREV_ACTION,
  NEXT_ACTION,
} from '../utils/constants';

type Link = {
  text: string;
  href: string;
};

export interface NavigationProps {
  className: string
  from: string
  prev: Link
  next: Link
};

const Navigation = ({prev, next }: NavigationProps) => (
  <Container>
    {prev &&
      <Action
        text={prev.text}
        icon={ARROW_ICON}
        href={prev.href}
        type={LINK}
        className={next ? PREV_ACTION : ONLY_PREV}
      />
    }
    {next &&
      <Action
        text={next.text}
        icon={ARROW_ICON}
        href={next.href}
        type={LINK}
        className={prev ? NEXT_ACTION : ONLY_NEXT}
      />
    }
  </Container>
);

export default Navigation;
