import styled from 'styled-components';

export const WrapperContainer = styled.div`
  height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
  padding: 25px;
  transition: background-color .5s;
  
  @media (max-width: 768px) {
    padding: 15px;
    height: unset;
    margin-bottom: 12vh;
  }
`;
