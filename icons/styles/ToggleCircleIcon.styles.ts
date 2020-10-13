import styled from 'styled-components';

export const Container = styled.div`
  transition: all .3s;
  position: relative;
  right: 3px;
  height: inherit;

  &.toggle_status {
    &__on {
      transform: translateX(19px);
    }

    &__off {
      transform: translateX(3px);
    }
  }
`;