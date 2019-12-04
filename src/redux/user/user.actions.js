import userActionTypes from './user.types';
import { auth, firestore } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from './../../firebase/users.utils';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const SignUpThroughEmail = (email, password, additionalData) => {
  return async dispatch => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, additionalData);
      dispatch({ type: userActionTypes.SIGN_UP_SUCCESS });
    } catch (err) {
      let error = { msg: err.message };

      dispatch({ type: userActionTypes.SIGN_UP_FAIL, payload: error });
    }
  };
};

export const SignInThroughEmail = (email, password, additionalData) => {
  return async dispatch => {};
};

export const addUserReview = summaryDetails => {
  const {
    movieId,
    movieTitle,
    movieSummary,
    movieRating,
    userId
  } = summaryDetails;
  return async dispatch => {
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    const reviewSnapShot = await usersMovieReview.get();
    if (!reviewSnapShot.exists) {
      let movieReview = { movieTitle, movieSummary, movieRating };
      usersMovieReview.set({
        ...movieReview
      });
      dispatch({
        type: userActionTypes.SET_USER_REVIEWS,
        payload: movieReview
      });
      dispatch({ type: 'ADD_REVIEW_SUCCESS' });
    } else {
      return;
    }
  };
};
