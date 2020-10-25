import Action from './Action';
import {
  Container,
} from './styles/Navigation.styles';
import {
  LINK,
  ONLY_PREV,
  ONLY_NEXT,
} from '../utils/constants';

type Link = {
  text: string;
  href: string;
};

export interface NavigationProps {
  prev: Link
  next: Link
};

const Navigation = ({prev, next }: NavigationProps) => (
  <Container>
    {prev && <Action text={prev.text} href={prev.href} type={LINK} className={next ? '' : ONLY_PREV} />}
    {next && <Action text={next.text} href={next.href} type={LINK} className={prev ? '' : ONLY_NEXT} />}
  </Container>
);

export default Navigation;
