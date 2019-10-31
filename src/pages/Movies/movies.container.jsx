import React, { useEffect } from 'react';
import Loading from './../../components/loader/Loading.component';
import React, { useEffect } from 'react';
import { MoviesContainer, MoviesPage, MovieCategory } from './Movies.styles';
import Loading from '../../components/loader/Loading.component';
import { connect } from 'react-redux';
import { fetchMoviesByCategory } from '../../redux/movies/movie.actions';
import { compose } from 'redux';

const MoviesContainer = () => {
  useEffect(() => {
    getMovies();
  });
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (category, pageNum) =>
      dispatch(fetchMoviesByCategory(category, pageNum))
  };
};

const mapStateToProps = state => ({
  isFetching: state.movie.isFetching
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  Loading
)(MoviesContainer);
