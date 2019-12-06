import React from 'react';
import {
  ReviewContainer,
  ReviewUsername,
  ReviewSummary,
  ReviewButtons
} from './Review.styles';
import Rating from './../../rating/Rating.component';
import Button from './../../button/Button.component';
import Loading from './../../loader/Loading.component';

const Review = ({ reviewDetails, currentUser }) => {
  return (
    <ReviewContainer>
      <ReviewUsername>{reviewDetails.displayName}</ReviewUsername>
      <Rating rating={reviewDetails.movieRating} changeable={null} />
      <ReviewSummary>
        <p>{reviewDetails.movieSummary}</p>
      </ReviewSummary>
      {currentUser ? (
        <ReviewButtons>
          <Button>Delete</Button>
          <Button>Edit</Button>
        </ReviewButtons>
      ) : null}
    </ReviewContainer>
  );
};

export default Review;
