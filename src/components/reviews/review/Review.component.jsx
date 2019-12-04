import React from 'react';
import {
  ReviewContainer,
  ReviewUsername,
  ReviewSummary,
  ReviewButtons
} from './Review.styles';
import Rating from './../../rating/Rating.component';
import Button from './../../button/Button.component';

const Review = ({ currentUser }) => {
  return (
    <ReviewContainer>
      <ReviewUsername>PenguinzMan</ReviewUsername>
      <Rating rating={4} changeable={null} />
      <ReviewSummary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit
          enim quod nesciunt explicabo! Suscipit consequuntur veniam
          reprehenderit veritatis sint fugit reiciendis nostrum dicta cupiditate
          amet accusantium magni totam asperiores, ipsa aut accusamus error
          optio id, sequi voluptate! Veniam expedita ut illum, pariatur
          consectetur enim dolorum magnam a illo quasi.
        </p>
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
