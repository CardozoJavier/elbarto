import { withTheme } from 'styled-components';
import Link from 'next/link';
import {
  Container,
  ItemContainer,
  Item,
} from './styles/Header.styles';

interface Item {
  text: string
  href: string
  type: string
  src?: string
  className?: string
  component?: React.ReactNode
  props?: {}
}

interface PropsInterface {
  left: Item[]
  center: Item[]
  right: Item[]
}

interface RenderItem {
  (item: Item): JSX.Element
}

const renderItem: RenderItem = (item: Item): JSX.Element => {
  const { type } = item || {};
  if (type === 'link') {
    return (
      <Link href={item.href}>
        <Item>
          {item.text}
        </Item>
      </Link>
    );
  }

  if (type === 'image') {
    return (
      <Link href={item.href}>
        <a className={item.className}>
          <img src={`/images/${item.src}`} alt={item.text} /> 
        </a>
      </Link>
    );
  }

  if (type === 'component') {
    const { props, component } = item || {};
    const Component = component;
    return (
      <Component {...props} />
    );
  }

  return null;
};

/**
 * The header component
 */
const Header: React.ReactNode = ({ left, center, right }: PropsInterface): JSX.Element => (
  <Container>
    <ItemContainer>
      {Array.isArray(left) && left.map(item => renderItem(item))}
    </ItemContainer>
    <ItemContainer>
      {Array.isArray(center) && center.map(item => renderItem(item))}
    </ItemContainer>
    <ItemContainer>
      {Array.isArray(right) && right.map(item => renderItem(item))}
    </ItemContainer>
  </Container>
);

export default withTheme(Header);
