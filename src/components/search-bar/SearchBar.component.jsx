import React, { useState, useEffect } from 'react';
import { SearchInput, Form } from './SearchBar.styles';
import { withRouter } from 'react-router-dom';

const SearchBar = props => {
  console.log(props);
  const [searchedMovie, setMovieSearch] = useState('');

  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
    setMovieSearch('');
    props.history.push({
      pathname: '/movies/Search',
      state: {
        searchTerm: searchedMovie
      }
    });
  };

  const handleChange = event => {
    setMovieSearch(event.target.value);
  };

  return (
    <Form>
      <SearchInput
        value={searchedMovie}
        onChange={handleChange}
        placeholder="Search Movies"
        type="text"
      />
      <button onClick={handleSubmit} style={{ cursor: 'pointer' }}>
        Search
      </button>
    </Form>
  );
};

export default withRouter(SearchBar);
