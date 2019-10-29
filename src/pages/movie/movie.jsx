import React, { useEffect, useState } from 'react';
import MovieDetails from '../../components/movie-details/Movie-details.component';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { MovieInfoContainer, MovieBackDrop } from './Movie.styles';
import Loading from '../../components/loader/Loading.component';
import apiKey from './../../config/key';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ movieInfo: null, movieCredits: null });

  useEffect(() => {
    const getMovie = async () => {
      let movieInfo = await Axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      ).then(movie => movie.data);
      let movieCredits = await Axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}
      `
      ).then(credit => credit);

      setMovie({ movieCredits, movieInfo });
    };

    getMovie();
  }, [id]);

  console.log(movie);

  return movie.movieInfo ? (
    <MovieInfoContainer>
      <MovieBackDrop
        url={`url("https://image.tmdb.org/t/p/w1280/${movie.movieInfo.backdrop_path}") no-repeat`}
      ></MovieBackDrop>

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
