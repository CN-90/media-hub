import React, { useEffect } from 'react';
import MovieDetails from '../../components/movie-details/MovieDetails.component';
import { useParams } from 'react-router-dom';
import { MovieInfoContainer, MovieBackDrop } from './Movie.styles';
import Loading from '../../components/loader/Loading.component';
import { connect } from 'react-redux';
import { fetchMovie } from './../../redux/movies/movie.actions';
import MovieCast from '../../components/movie-details/movie-cast/Movie-cast.component';
import Reviews from '../../components/reviews/Reviews.component';

const Movie = props => {
  const { id } = useParams();
  const { isFetching, movie, fetchMovie } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovie(id);
  }, [id, fetchMovie]);

  return movie.movieInfo && !isFetching ? (
    <MovieInfoContainer>
      <MovieBackDrop
        url={`url("https://image.tmdb.org/t/p/w1280/${movie.movieInfo.backdrop_path}") no-repeat`}
      ></MovieBackDrop>

      <MovieDetails
        id={movie.movieInfo.id}
        title={movie.movieInfo.title}
        summary={movie.movieInfo.overview}
        poster={movie.movieInfo.poster_path}
        backdrop={movie.movieInfo.backdrop_path}
        release_date={movie.movieInfo.release_date}
        genres={movie.movieInfo.genres}
        crew={movie.movieCredits.data}
      />
      <MovieCast cast={movie.movieCredits.data} />
      <Reviews />
    </MovieInfoContainer>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => ({
  isFetching: state.movie.isFetching,
  movie: state.movie.movie
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
