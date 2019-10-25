import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import { MoviesContainer, MoviesPage, MovieCategory } from './Movies.styles';
import Loading from '../../components/loader/Loading.component';

const Movies = props => {
  const [movies, setMovies] = useState(null);
  const location = props.location.pathname
    ? props.location.pathname.split('/')[2].toLowerCase()
    : '';
  let searchTerm = location === 'search' ? props.location.state.searchTerm : '';
  const titles = {
    top_rated: 'Top Rated',
    upcoming: 'Upcoming Movies',
    popular: 'Popular Movies',
    now_playing: 'Now Playing',
    search: 'Search Movie Database'
  };

  useEffect(() => {}, [location, searchTerm]);

  return movies ? (
    <MoviesPage>
      <MovieCategory>{titles[location]}</MovieCategory>
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
    </MoviesPage>
  ) : (
    <Loading />
  );
};

export default Movies;
