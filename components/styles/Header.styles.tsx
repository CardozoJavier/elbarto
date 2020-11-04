import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .header-icon img {
    max-width: 75px;
    max-height: 75px;
  }

  @media (max-width: 856px) {
    max-width: 305px;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }

  &.contact-link {
    a {
      color: ${({ theme }) => theme.white.w08};
      background-color: ${({ theme }) => theme.orange.o40};
      border-radius: 3px;
      &:hover {
        background-color: ${({ theme }) => theme.orange.o60};
        color: ${({ theme }) => theme.white.w100};
      }
    }
  }
`;

export const Item = styled.a`
  font-size: 14px;
  padding: 10px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  transition: all .3s;
  text-transform: uppercase;
  &:link, &:visited {
    color: ${({ theme }) => theme.text.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.orange.o100};
    cursor: pointer;
  }

  &.menu-closed {
    color: ${({ theme }) => theme.white.w08};
    opacity: 0;
    transition: opacity .5s;
  }

  &.menu-openned {
    color: ${({ theme }) => theme.white.w08};
  }
`;

export const MobileHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuButtonContainer = styled.div`
  position: absolute;
  z-index: 2;
  padding: 5px;
  transition: transform 1s;
  
  &.menu-closed {
    transform: translateX(0);
  }
  
  &.menu-openned {
    transform: translateX(calc(100vw - 83px));
  }
`;

export const MenuButtonLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 3px 0;

  &.menu-closed {
    transition: transform 1s, opacity .5s;
    background-color: #202020;

    &.top-line, &.middle-line, &.bottom-line {
      transform: rotate(0) translate(0, 0);
      opacity: 1;
    }
  }
  &.menu-openned {
    transition: transform 1s, opacity 1.5s;
    background-color: ${({ theme }) => theme.orange.o40};

    &.top-line {
      transform: rotate(45deg) translate(5px, 4px);
    }
    &.middle-line {
      transform: rotate(675deg);
      opacity: 0;
    }
    &.bottom-line {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 75px 10px;
  z-index: 1;
  align-items: flex-end;

  &.menu-openned {
    transition: width 1s, background-color 1s;
    background-color: ${({ theme }) => theme.black.b08};
  }

  &.menu-closed {
    transition: width 1s, background-color 1s, visibility 1s;
    width: 75px;
    overflow: hidden;
    visibility: hidden;
  }
`;
