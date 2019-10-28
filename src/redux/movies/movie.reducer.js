import movieActionTypes from './movie.types';
import { getMovies } from './movie.utils';

const INITIAL_STATE = {
  movies: [],
  movie: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieActionTypes.SET_CURRENT_MOVIES:
      return {
        ...state,
        movies: getMovies(action.payload)
      };
  }
};
