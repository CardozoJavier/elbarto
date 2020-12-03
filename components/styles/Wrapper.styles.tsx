import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: background-color .5s;
  
  @media (max-width: 767px) {
    height: unset;
  }
`;
