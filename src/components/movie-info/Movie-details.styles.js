import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr minmax(160px, 1fr);
  width: 80%;
  position: relative;
  top: 125px;
  margin: 0 auto;
  font-size: 1.5rem;
`;

export const MovieImg = styled.div`
  width: 300px;
`;

export const MovieTitle = styled.h1`
  padding-bottom: 5px;
`;

export const MovieSummary = styled.p`
  margin-top: 25px;
  color: #8e8e8e;
`;
