import React, { useState } from 'react';
import { SearchInput, Form } from './SearchBar.styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchQuery } from '../../redux/movies/movie.actions';

const SearchBar = props => {
  const [searchedMovie, setMovieSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push({
      pathname: `/movies/search/${searchedMovie}/1`,
      state: {
        searchTerm: searchedMovie
      }
    });
    props.searchQuery(searchedMovie);
    setMovieSearch('');
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

const mapStateToProps = state => ({
  searchTerm: state.movie.movieSearch
});

const mapDispatchToProps = dispatch => ({
  searchQuery: searchTerm => dispatch(setSearchQuery(searchTerm))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);
