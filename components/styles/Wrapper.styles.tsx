import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: background-color .5s;
  
  @media (max-width: 768px) {
    padding: 15px;
    height: unset;
    margin-bottom: calc(var(--vh, 1vh) * 10);
  }
`;
