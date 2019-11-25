import { combineReducers } from 'redux';

import movieReducer from './movies/movie.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer
});

export default rootReducer;
