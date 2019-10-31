import movieActionTypes from './movie.types';
import {
  fetchMovieAsync,
  fetchMoviesAsync,
  fetchMoviesSearchAsync
} from './movie.utils';

// Fetches a single movie based on movies ID
export const fetchMovie = id => {
  return async dispatch => {
    dispatch(clearMovies());
    dispatch(fetchMoviesStart());

    await fetchMovieAsync(id)
      .then(movieData => {
        let movieObj = {
          movieInfo: movieData[0].data,
          movieCredits: movieData[1]
        };
        dispatch(fetchMovieSuccess(movieObj));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));

    dispatch(fetchMoviesFinish());
  };
};

// Fetches a movie by category, e.g popular, upcoming, top rated, etc..
export const fetchMoviesByCategory = (category, pageNumber) => {
  return async dispatch => {
    dispatch(clearMovies());
    dispatch(fetchMoviesStart());
    await fetchMoviesAsync(category, pageNumber)
      .then(movieData => {
        dispatch(fetchMoviesSuccess(movieData.data.results));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));
    dispatch(fetchMoviesFinish());
  };
};

// Fetches movies based on users search
export const fetchMovieSearch = (searchTerm, pageNumber) => {
  return async dispatch => {
    dispatch(fetchMoviesStart());
    await fetchMoviesSearchAsync(searchTerm, pageNumber)
      .then(movieData => {
        dispatch(fetchMoviesSuccess(movieData.data.results));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));
    dispatch(fetchMoviesFinish());
  };
};

export const fetchMoviesStart = () => ({
  type: movieActionTypes.FETCH_MOVIES_START
});

export const fetchMoviesFinish = () => ({
  type: movieActionTypes.FETCH_MOVIES_FINISH
});

export const fetchMoviesSuccess = movie => ({
  type: movieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movie
});

export const fetchMovieSuccess = movie => ({
  type: movieActionTypes.FETCH_MOVIE_SUCCESS,
  payload: movie
});

export const fetchMoviesFailure = error => ({
  type: movieActionTypes.FETCH_MOVIES_FAIL,
  payload: error
});

export const clearMovies = () => ({
  type: movieActionTypes.CLEAR_MOVIES
});
