import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MovieInfo from '../../components/movie-info/MovieInfo.component';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { MovieInfoContainer } from './movie.styles';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(id);
  useEffect(() => {}, []);
  console.log(movie);
  return (
    <MovieInfoContainer>
      <MovieInfo
        title={movie.title}
        summary={movie.overview}
        image={movie.poster_path}
      />
    </MovieInfoContainer>
  );
};

export default Movie;
