import React, { useEffect } from 'react';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import { MoviesContainer, MoviesPage, MovieCategory } from './Movies.styles';
import Loading from '../../components/loader/Loading.component';
import Pagination from './../../components/pagination/Pagination.component';
import { connect } from 'react-redux';
import { fetchMoviesByCategory } from '../../redux/movies/movie.actions';
import { getPageTitle } from './../../utils/utils';

const Movies = props => {
  const category = props.location.pathname.split('/')[2].toLowerCase();

  let searchTerm = props.location.state
    ? props.location.state.searchTerm
    : null;
  const pageNumber = props.match.params.pageNumber;
  const { movies, isFetching, getMovies } = props;
  useEffect(() => {
    getMovies(category, pageNumber);
  }, [category, getMovies, pageNumber, searchTerm]);

  return !isFetching ? (
    <MoviesPage>
      <MovieCategory>{getPageTitle(category, searchTerm)}</MovieCategory>
      <MoviesContainer>
        {movies.map(movie => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              score={movie.vote_average}
              id={movie.id}
            />
          );
        })}
      </MoviesContainer>
      <Pagination pageNumber={pageNumber} category={category} />
    </MoviesPage>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => ({
  movies: state.movie.movies,
  isFetching: state.movie.isFetching
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (category, pageNum) =>
      dispatch(fetchMoviesByCategory(category, pageNum))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
