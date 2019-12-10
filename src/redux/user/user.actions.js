import userActionTypes from './user.types';
import { auth, firestore } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from './../../firebase/users.utils';
import { validateSignup } from '../../utils/utils';

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

export const addUserReview = reviewDetails => {
  const { movieId, userId } = reviewDetails;
  return async dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);
    const reviewSnapShot = await usersMovieReview.get();
    if (!reviewSnapShot.exists) {
      reviewBatch.set(usersMovieReview, reviewDetails);
      reviewBatch.set(movieReviews, reviewDetails);
      reviewBatch
        .commit()
        .then(data => {
          dispatch({
            type: userActionTypes.SET_USER_REVIEWS,
            payload: reviewDetails
          });
          dispatch({ type: userActionTypes.ADD_REVIEW_SUCCESS });
        })
        .catch(err => console.log(err));
    } else {
      return;
    }
  };
};

export const deleteUserReview = (userId, movieId) => {
  return dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);

    reviewBatch.delete(usersMovieReview);
    reviewBatch.delete(movieReviews);
    reviewBatch
      .commit()
      .then(() => {
        dispatch({
          type: 'DELETE_REVIEW',
          payload: { movieId, userId }
        });
        // dispatch({ type: 'DELETE_REVIEW_SUCCESS' });
      })
      .catch(err => console.log(err));
  };
};

export const updateUserReview = reviewDetails => {
  let { userId, movieId } = reviewDetails;
  return async dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);

    reviewBatch.update(usersMovieReview, reviewDetails);
    reviewBatch.update(movieReviews, reviewDetails);
    reviewBatch
      .commit()
      .then(() => {
        dispatch({
          type: 'UPDATE_REVIEW',
          payload: reviewDetails
        });
        // dispatch({ type: 'DELETE_REVIEW_SUCCESS' });
      })
      .catch(err => console.log(err));
  };
};
