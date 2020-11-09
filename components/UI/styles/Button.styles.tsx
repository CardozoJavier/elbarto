import styled from 'styled-components';

export const Container = styled.button`
  width: fit-content;
  padding: 20px 40px;
  margin: 10vh 0;
  border-radius: 3px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  
  &.button-line {
    color: ${({ theme }) => theme.white.w08};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.orange.o100};
    transition: background-color .3s, color .3s;
    &:hover {
      border: 1px solid ${({ theme }) => theme.orange.o40};
      background-color: ${({ theme }) => theme.orange.o40};
      color: ${({ theme }) => theme.white.w100};
      cursor: pointer;
    }
  }
`;

export const Label = styled.p`
  margin: 0;
`;
