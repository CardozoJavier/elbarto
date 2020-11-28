import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 2vh 5vw;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.black.b08};
  box-shadow: 0px -3px 3px 3px ${({ theme }) => theme.black.b08};
  z-index: 999;


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
    svg {
      transition: transform .3s;
      transform: translateX(0);
    }
    &:hover {
      svg {
        transition: transform .3s;
        transform: translateX(-10px);
        path {
          fill: ${({ theme }) => theme.orange.o40};
        }
      }
    }
  }

  .only-next, .next-action {
    svg {
      transition: transform .3s;
      transform: rotate(180deg) translateX(0);
    }
    &:hover {
      svg {
        transition: transform .3s;
        transform: rotate(180deg) translateX(-10px);
        path {
          fill: ${({ theme }) => theme.orange.o40};
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.orange.o40};
    width: 100%;
    box-shadow: 0px -3px 3px 3px ${({ theme }) => theme.orange.o40};
    .only-prev, .prev-action, .only-next, .next-action {
      &:hover {
        svg {
          path {
            fill: ${({ theme }) => theme.white.w100};
          }
        }
      }
    }
  }
`;

