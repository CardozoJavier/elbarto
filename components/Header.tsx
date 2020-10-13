import { useContext } from 'react';
import { withTheme } from 'styled-components';
import Link from 'next/link';
import {
  Container,
  ItemContainer,
  Item,
} from './styles/Header.styles';
import Toggle from './Toggle';
import {
  HEADER_ICON,
  LINK,
  IMAGE,
} from '../utils/constants';
import Context from '../context';

interface Item {
  text: string
  href: string
  type: string
  src?: string
}

export interface HeaderProps {
  left: Item[]
  center: Item[]
  right: Item[]
}

interface RenderItem {
  (item: Item): JSX.Element
}

const renderItem: RenderItem = (item: Item): JSX.Element => {
  const { type } = item || {};
  if (type === LINK) {
    return (
      <Link href={item.href} key={item.text}>
        <Item>
          {item.text}
        </Item>
      </Link>
    );
  }

  if (type === IMAGE) {
    return (
      <Link href={item.href} key={item.text}>
        <a className={HEADER_ICON}>
          <img src={`/images/${item.src}`} alt={item.text} /> 
        </a>
      </Link>
    );
  }

  return null;
};

/**
 * The header component with links to other pages
 */
const Header: React.ReactNode = (): JSX.Element => {
  const { header } = useContext(Context);
  const { left, center, right } = header || {};

  return (
    <Container>
      <ItemContainer>
        {Array.isArray(left) && left.map(item => renderItem(item))}
      </ItemContainer>
      <ItemContainer>
        {Array.isArray(center) && center.map(item => renderItem(item))}
      </ItemContainer>
      <ItemContainer>
        {Array.isArray(right) && right.map(item => renderItem(item))}
        <Toggle />
      </ItemContainer>
    </Container>
  );
}

export default withTheme(Header);
