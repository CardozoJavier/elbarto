import styled from 'styled-components';

export const ActionContainer = styled.div`
  align-self: flex-end;
`;

export const ActionLink = styled.a`
  font-size: 14px;
  display: block;
  margin-left: auto;
  width: fit-content;
  text-decoration: none;
  transition: all .3s;
  text-transform: uppercase;
  padding: 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.white.w08};
  border: 1px solid ${({ theme }) => theme.orange.o100};
  &:hover, &:link, &:visited {
    cursor: pointer;
    color: ${({ theme }) => theme.white.w100};
    background-color: ${({ theme }) => theme.orange.o100};
  }
`;
