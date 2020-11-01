import styled from 'styled-components';

export const ActionContainer = styled.div`
  align-self: flex-end;
`;

export const ActionLink = styled.a`
  display: block;
  margin-left: auto;
  width: fit-content;
  text-decoration: none;
  transition: all .3s;
  text-transform: uppercase;
  padding: 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.white.w08};
  &:hover, &:link, &:visited {
    cursor: pointer;
    color: ${({ theme }) => theme.orange.o100};
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 4vw;
  }
`;
