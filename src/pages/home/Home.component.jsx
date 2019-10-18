import React, { useEffect, useState } from 'react';
import { Home } from './Home.styles';
import Axios from 'axios';
import MovieCard from './../../components/movie-card/MovieCard.Component';

const Homepage = props => {
  const { title, apiCall } = props.location.state;
  const [movies, setMovies] = useState([]);
  console.log(apiCall);
  useEffect(() => {}, [title]);
  return (
    <Home>
      {movies.map(movie => {
        return <MovieCard title={movie.title} image={movie.poster_path} />;
      })}
    </Home>
  );
};

export default Homepage;

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1  NOW PLAYING
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1 POPULAR
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
