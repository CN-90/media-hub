import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import { MoviesContainer, MoviesPage, MovieCategory } from './Movies.styles';
import Loading from '../../components/loader/Loading.component';
import Pagination from './../../components/pagination/Pagination.component';
import apiKey from './../../config/key';

const Movies = props => {
  const [movies, setMovies] = useState(null);
  const location = props.location.pathname.split('/')[2].toLowerCase();

  let searchTerm = props.location.state
    ? props.location.state.searchTerm
    : 'Harry Potter';
  const pageNumber = props.match.params.pageNumber;
  const titles = {
    top_rated: 'Top Rated',
    upcoming: 'Upcoming Movies',
    popular: 'Popular Movies',
    now_playing: 'Now Playing',
    search: 'Search Movie Database'
  };

  useEffect(() => {
    let link = '';
    const getMovies = async () => {
      if (location === 'search') {
        link = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`;
      } else {
        link = `https://api.themoviedb.org/3/movie/${location}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
      }

      await Axios.get(link).then(movies => {
        const filterMovies = movies.data.results.filter(
          movie => movie.poster_path !== null
        );
        setMovies(filterMovies);
      });
    };
    getMovies();
  }, [location, pageNumber, searchTerm]);

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
      <Pagination />
    </MoviesPage>
  ) : (
    <Loading />
  );
};

export default Movies;
