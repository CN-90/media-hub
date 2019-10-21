import React from 'react';
import { SearchInput, SearchBarContainer } from './SearchBar.styles';

const SearchBar = () => {
  const handleSubmit = () => {
    console.log('Submited');
  };

  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search Movies" type="text" />
      <button onClick={handleSubmit} style={{ cursor: 'pointer' }}>
        Search
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
