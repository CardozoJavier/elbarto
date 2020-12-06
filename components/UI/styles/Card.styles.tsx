import styled from 'styled-components';
import { PORTFOLIO_CARD } from '../../../utils/constants';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 3px 3px ${({ theme }) => theme.black.b01};
  border-radius: 3px;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
  @media (min-width: 768px) {
    margin: 50px 0;
    &.${PORTFOLIO_CARD}:first-of-type {
      margin-top: 0;
    }
  }
`;
