import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 5vw;

  .only-prev {
    margin-right: auto;
  }
  .only-next {
    margin-left: auto;
  }
  .only-prev, .only-next, .prev-action, .next-action {
    a {
      display: flex;
      align-items: center;
      svg {
        margin: 0 10px;
      }
    }
  }

  .only-prev, .prev-action {
    a {
      flex-direction: row-reverse;
    }
    &:hover {
      svg {
        transition: transform .3s;
        transform: translateX(-10px);
        path {
          fill: ${({ theme }) => theme.orange.o100};
        }
      }
    }
  }

  .only-next, .next-action {
    svg {
      transform: rotate(180deg);
    }
    &:hover {
      svg {
        transition: transform .3s;
        transform: rotate(180deg) translateX(-10px);
        path {
          fill: ${({ theme }) => theme.orange.o100};
        }
      }
    }
  }
`;

