import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import { MoviesContainer, MoviesPage, MovieCategory } from './Movies.styles';
import Loading from '../../components/loader/Loading.component';
import Pagination from './../../components/pagination/Pagination.component';
import apiKey from './../../config/key';
import { connect } from 'react-redux';
import { fetchMoviesByCategory } from '../../redux/movies/movie.actions';
import { getPageTitle } from './../../utils/utils';

const Movies = props => {
  const [movies, setMovies] = useState(null);
  const category = props.location.pathname.split('/')[2].toLowerCase();

  let searchTerm = props.location.state
    ? props.location.state.searchTerm
    : null;
  const pageNumber = props.match.params.pageNumber;
  // const { movies, isFetching } = props.movies;
  useEffect(() => {
    // props.getMoviez(category, 1);
    // console.log(movies);
    let link = '';
    const getMovies = async () => {
      if (category === 'search') {
        link = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`;
      } else {
        link = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
      }
      await Axios.get(link).then(movies => {
        const filterMovies = movies.data.results.filter(
          movie => movie.poster_path !== null
        );
        setMovies(filterMovies);
      });
    };
    getMovies();
  }, [category, pageNumber, searchTerm]);

  return movies ? (
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
      <Pagination />
    </MoviesPage>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => ({
  movies: state.movie
});

const mapDispatchToProps = dispatch => {
  return { getMoviez: id => dispatch(fetchMoviesByCategory(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
