import React from 'react';
import {
  ReviewContainer,
  ReviewUsername,
  ReviewSummary,
  ReviewButtons
} from './Review.styles';
import Rating from './../../rating/Rating.component';
import Button from './../../button/Button.component';

const Review = ({
  reviewDetails,
  currentUser,
  deleteReview,
  setIsMovieReviwed
}) => {
  const handleDeleteClick = (userId, movieId) => {
    setIsMovieReviwed({});
    deleteReview(userId, movieId);
  };

  return (
    <ReviewContainer>
      <ReviewUsername>{reviewDetails.displayName}</ReviewUsername>
      <Rating rating={reviewDetails.movieRating} changeable={null} />
      <ReviewSummary>
        <p>{reviewDetails.movieSummary}</p>
      </ReviewSummary>
      {currentUser ? (
        <ReviewButtons>
          <Button
            onClick={() =>
              handleDeleteClick(currentUser.id, reviewDetails.movieId)
            }
          >
            Delete
          </Button>
        </ReviewButtons>
      ) : null}
    </ReviewContainer>
  );
};

export default Review;
