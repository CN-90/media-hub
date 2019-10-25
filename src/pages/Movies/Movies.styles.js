import styled from 'styled-components';

export const MoviesPage = styled.div`
  margin-left: 187px;
  padding-top: 125px;
`;

export const MovieCategory = styled.h1`
  color: #ffffff;
  font-weight: normal;
  padding-bottom: 4%;
  margin-left: 6%;
  font-size: 3.5rem;
`;

export const MoviesContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  width: 86%;
  margin-left: 6%;
`;
