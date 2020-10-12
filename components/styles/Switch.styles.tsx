import styled from 'styled-components';
// import palette from '../../../styles/palette';
// const gray, green, purple90 } = pal;

export const SwitchContainer = styled.div`
  border-radius: 15px;
  background-color: gray;
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  transition: all .3s;

  &:hover {
    transition: all .3s;
    cursor: pointer;
    circle {
      transition: all .3s;
      stroke: gray.;
    }
    
    background-color: gray.;
    &.toggle {
      
      &-default {}
      &.switch {
        &--green {
          &__disabled {
            cursor: default;
            background-color: gray;
            circle {
              stroke: gray;
            }
          }
        } 
      }
    }
  }

  &.toggle {
    transition: all .3s;
    &-default {}
    &.switch {
      &--green {
        &__on {
          background-color: purple;
        }

        &__disabled {
          background-color: gray;
          circle {
            stroke: gray;
          }
        }
      }
    }
  }
`;