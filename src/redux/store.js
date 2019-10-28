import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createSTore(rootReducer, applyMiddleware(...middlewares));

export { store };
