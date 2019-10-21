import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MovieCard from './../../components/movie-card/MovieCard.Component';
import { MoviesContainer, Home, MovieTitle } from './Home.styles';

const Homepage = props => {
  const { title, apiCall } = props.location.state;
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);
  console.log(apiCall);
  useEffect(() => {}, [apiCall]);
  return (
    <Home>
      <MovieTitle>{title}</MovieTitle>
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
    </Home>
  );
};

export default Homepage;

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1  NOW PLAYING
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1 POPULAR
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
