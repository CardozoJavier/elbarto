import styled from 'styled-components';

export const Container: React.ReactNode = styled.div`
  transition: all .3s;
  position: relative;
  right: 2px;
  top: 1px;

  &.switch {
    &__on {
      transform: translateX(19px);
    }

    &__off {
      transform: translateX(3px);
    }
  }
`;