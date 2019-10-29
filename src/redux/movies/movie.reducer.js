import movieActionTypes from './movie.types';
// import { getMovies } from './movie.utils';

const INITIAL_STATE = {
  movies: [],
  movie: {},
  pageNumber: 1,
  error: null,
  isFetching: false
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload
      };

    case movieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };

    case movieActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true
      };

    case movieActionTypes.FETCH_MOVIES_FINISH:
      return {
        ...state,
        isFetching: false
      };

    case movieActionTypes.FETCH_MOVIES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
