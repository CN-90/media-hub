import movieActionTypes from './movie.types';
import {
  fetchMovieAsync,
  fetchMoviesAsync,
  fetchMoviesSearchAsync
} from './movie.utils';

export const fetchMovie = id => {
  return async dispatch => {
    dispatch(fetchMoviesStart());
    await fetchMovieAsync(417384)
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

export const fetchMoviesByCategory = (category, pageNumber) => {
  return async dispatch => {
    dispatch(fetchMoviesStart());
    await fetchMoviesAsync(category, pageNumber)
      .then(movieData => {
        dispatch(fetchMoviesSuccess(movieData.data));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));
    dispatch(fetchMoviesFinish());
  };
};

export const fetchMovieSearch = searchTerm => {
  return dispatch => {
    dispatch(fetchMoviesStart());
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
