import styled from 'styled-components';

export const ComposeContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  max-width: 32%;
  margin-top: 9vw;
  height: fit-content;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const ImageContainer = styled.div`
  background: #1c1c1c;
  position: absolute;
  top: 5%;
  left: 14%;
  width: 72%;
  padding: 3px 3px 3.5% 3px;
`;

export const Image = styled.img`
  width: 100%;
`;