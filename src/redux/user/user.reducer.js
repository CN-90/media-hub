import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: { favorites: [], id: null, reviews: [] },
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case userActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case userActionTypes.SIGN_UP_SUCCESS:
      return state;

    case userActionTypes.SET_USER_REVIEWS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          reviews: [...state.currentUser.reviews, action.payload]
        }
      };

    default:
      return state;
  }
};

export default userReducer;
