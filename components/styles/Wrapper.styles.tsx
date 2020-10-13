import styled from 'styled-components';

export const WrapperContainer = styled.div`
  padding: 25px;
  transition: background-color .5s;
  background-color: ${({ theme: { background } }) => background.main};
  border: 1px solid magenta;
`;
