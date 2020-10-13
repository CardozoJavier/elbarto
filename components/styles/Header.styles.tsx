import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 10px;
  .header-icon img {
    max-width: 100px;
    max-height: 100px;
  }

  border: 1px solid blue;
`;

export const Item = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  &:hover, &:link, &:visited {
    color: red;
    cursor: pointer;
  }

  border: 1px solid cyan;
`;
