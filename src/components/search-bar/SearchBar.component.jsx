import React from 'react';
import { SearchInput, SearchBarContainer } from './SearchBar.styles';

const SearchBar = () => (
  <SearchBarContainer>
    <SearchInput placeholder="Search Movies" type="text" />
    <button>Search</button>
  </SearchBarContainer>
);

export default SearchBar;
