import React, { useEffect, useState } from 'react';
import MovieDetails from '../../components/movie-info/Movie-details.component';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import {
  MovieInfoContainer,
  MovieBackDrop,
  MovieBackDropOverlay
} from './Movie.styles';
import Loading from '../../components/loader/Loading.component';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ movieInfo: null, movieCredits: null });

  useEffect(() => {}, [id]);

  return movie.movieInfo ? (
    <MovieInfoContainer>
      <MovieBackDrop
        url={`url("https://image.tmdb.org/t/p/w1280/${movie.movieInfo.backdrop_path}") no-repeat`}
      >
        <MovieBackDropOverlay />
      </MovieBackDrop>

      <MovieDetails
        title={movie.movieInfo.title}
        summary={movie.movieInfo.overview}
        poster={movie.movieInfo.poster_path}
        backdrop={movie.movieInfo.backdrop_path}
        release_date={movie.movieInfo.release_date}
        genres={movie.movieInfo.genres}
        crew={movie.movieCredits.data}
      />
    </MovieInfoContainer>
  ) : (
    <Loading />
  );
};

export default Movie;
