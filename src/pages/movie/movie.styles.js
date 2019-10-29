import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  height: auto;
`;

export const MovieBackDrop = styled.div`
  background: ${props => props.url};
  height: 700px;
  width: calc(100% - 187px);
  position: absolute;
  top: 45px;
  left: 187px;
  background-size: cover;
  background-position: top;
  z-index: -1;

  ::before {
    content: '';
    background: #0e0e0e;
    position: absolute;
    display: block;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: rgba(5, 5, 5, 0.92);
  }
`;
