import styled from 'styled-components';

export const ActionContainer = styled.div`
  align-self: flex-end;

  @media (max-width: 767px) {
    &.custom-button {
      margin-left: auto;
      a {
        font-size: 12px;
        color: ${({ theme }) => theme.orange.o40};
        padding: 5px 10px;
        border-radius: 3px;
      }
    }

    &:hover {
      a {
        color: ${({ theme }) => theme.white.w100};
      }
      svg {
        path {
          fill: ${({ theme }) => theme.white.w100};
        }
      }
    }
  }
  &.arrow-button {
    a {
      display: flex;
      align-items: center;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.white.w08};
      font-size: 1rem;
      padding: 10px;
    }
    margin: 50px auto 50px 0;
    svg {
      height: 18px;
      margin-left: 10px;
      transition: transform .3s;
      transform: rotate(270deg);
      path {
        fill: ${({ theme }) => theme.orange.o40};
      }
    }
    button:hover {
      cursor: pointer;
    }
  }
`;

export const ActionLink = styled.a`
  font-size: 1vw;
  white-space: pre;
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
    color: ${({ theme }) => theme.orange.o40};
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    font-size: 4vw;
  }
`;

export const Button = styled.button`
  &:focus {
    outline: none;
  }
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.white.w08};
  border: none;
  color: ${({ theme }) => theme.orange.o40};
  display: flex;
  align-items: center;
`;
