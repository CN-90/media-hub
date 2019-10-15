import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  margin: 0 auto;
  width: 25%;
  display: grid;
  grid-template-columns: 6fr 1fr;

  button {
    height: 100%;
    background: #2176ff;
    border: none;
    color: white;
    padding: 15px;
    border-radius: 0px 5px 5px 0px;
  }
`;

export const SearchInput = styled.input`
  background: #363636;
  border: none;
  padding: 15px;
  color: #707070;
`;
