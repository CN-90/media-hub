import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  color: #959595;
`;

export const LoadingText = styled.p`
  background: linear-gradient(80deg, #959595, #c1bfbf, #141414);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
