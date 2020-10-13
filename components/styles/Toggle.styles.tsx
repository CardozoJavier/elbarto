import styled from 'styled-components';

export const ToggleContainer = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.gray.g1};
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  transition: all .3s;
  margin: 8px;

  &:hover {
    transition: all .3s;
    cursor: pointer;
    circle {
      transition: all .3s;
      stroke: ${({ theme }) => theme.gray.g07};
    }
    
    background-color: ${({ theme }) => theme.gray.g07};
    &.toggle_status {
      &__disabled {
        cursor: default;
        background-color: ${({ theme }) => theme.gray.g0};
        circle {
          stroke: ${({ theme }) => theme.gray.g0};
        }
      }
    }
  }

  &.toggle_status {
    transition: all .3s;
    &__on {
      background-color: ${({ theme }) => theme.purple90};
    }

    &__disabled {
      background-color: ${({ theme }) => theme.gray.g0};
      circle {
        stroke: ${({ theme }) => theme.gray.g0};
      }
    }
  }
`;