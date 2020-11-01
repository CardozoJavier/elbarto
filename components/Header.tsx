import { useState, useContext, useEffect, useCallback } from 'react';
import { withTheme } from 'styled-components';
import Link from 'next/link';
import {
  Menu,
  Item,
  Container,
  ItemContainer,
  MenuButtonLine,
  MenuButtonContainer,
  MobileHeaderContainer,
} from './styles/Header.styles';
import {
  CONTACT_LINK,
  HEADER_ICON,
  LINK,
  IMAGE,
  MENU_CLOSED,
  MENU_OPENNED,
} from '../utils/constants';
import { isDesktop } from '../utils/getDeviceType';
import Context from '../context';

interface Item {
  text: string
  href: string
  type: string
  src: string
  passHref: boolean
  target: string
}

export interface HeaderProps {
  left: Item[]
  center: Item[]
  right: Item[]
}

interface RenderItem {
  (item: Item, customClassName?: string): JSX.Element
}

const renderItem: RenderItem = (item: Item, customClassName: string): JSX.Element => {
  const { type, passHref } = item || {};
  if (type === LINK) {
    return (
      <Link href={item.href} key={item.text} passHref={passHref}>
        <Item target={item.target} className={customClassName}>
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

const getDesktopHeader = ({ left, center, right }: HeaderProps,): React.ReactElement => (
  <>
    <ItemContainer>
      {Array.isArray(left) && left.map(item => renderItem(item))}
    </ItemContainer>
    <ItemContainer>
      {Array.isArray(center) && center.map(item => renderItem(item))}
    </ItemContainer>
    <ItemContainer className={CONTACT_LINK}>
      {Array.isArray(right) && right.map(item => renderItem(item))}
    </ItemContainer>
  </>
);
/**
 * The mobile menu 
 */
const getMobileHeader = (menuClassName, actions, handleMenuClick): React.ReactElement => (
  <MobileHeaderContainer>
    <MenuButtonContainer className={menuClassName} role="button" onClick={handleMenuClick}>
      <MenuButtonLine className={`${menuClassName} top-line`} />
      <MenuButtonLine className={`${menuClassName} middle-line`} />
      <MenuButtonLine className={`${menuClassName} bottom-line`} />
    </MenuButtonContainer>
    <Menu className={menuClassName}>
      {actions.map(action => (renderItem(action, menuClassName)))}
    </Menu>
  </MobileHeaderContainer>
);

/**
 * The header component with links to other pages
 */
const Header: React.ReactNode = (): JSX.Element => {
  const [menuClassName, setMenuClassName] = useState(MENU_CLOSED);
  const [render, setRender] = useState(null);
  const { header } = useContext(Context);
  const { left, center, right } = header || {};
  const actions = [...center, ...right];

  const handleMenuClick = useCallback(() => {
    setMenuClassName(prev => (prev === MENU_CLOSED ? MENU_OPENNED : MENU_CLOSED));
  }, []);

  // Is to avoid render issues when use window object
  useEffect(() => {
    const headerLinks = isDesktop
      ? getDesktopHeader({ left, center, right })
      : getMobileHeader(menuClassName, actions, handleMenuClick)
    setRender(headerLinks);
  }, [isDesktop, menuClassName, handleMenuClick]);

  return (
    <Container>
      {render}
    </Container>
  );
}

export default withTheme(Header);
