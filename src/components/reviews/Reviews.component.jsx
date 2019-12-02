import React from 'react';
import { ReviewsContainer, ReviewContainer } from './Reviews.styles';
import Button from './../button/Button.component';
import Review from './review/Review.component';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <h1>
        Reviews (1) <Button>Add Review</Button>
      </h1>
      <ReviewContainer>
        <Review currentUser={true} />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ReviewContainer>
    </ReviewsContainer>
  );
};

export default Reviews;
