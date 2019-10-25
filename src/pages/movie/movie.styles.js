import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  height: 100%;
  margin-left: 187px;
`;

export const MovieBackDrop = styled.div`
  background: ${props => props.url};
  height: 700px;
  width: 100%;
  position: absolute;
  top: 45px;
  left: 187px;
  background-size: cover;
  background-position: top;
`;

export const MovieBackDropOverlay = styled.div`
  background: #0e0e0e;
  height: 100%;
  width: 100%;
  zindex: -1;
  opacity: 0.9;
`;
