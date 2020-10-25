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
    max-width: 100px;
    max-height: 100px;
  }

  @media (max-width: 856px) {
    max-width: 305px;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

export const Item = styled.a`
  font-size: 14px;
  padding: 10px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  transition: all .3s;
  text-transform: uppercase;
  &:hover, &:link, &:visited {
    color: ${({ theme }) => theme.orange.o100};
    cursor: pointer;
  }
`;
