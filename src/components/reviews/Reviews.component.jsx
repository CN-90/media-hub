import React, { useState } from 'react';
import { ReviewsContainer, ReviewContainer } from './Reviews.styles';
import Button from './../button/Button.component';
import Review from './review/Review.component';
import ReviewForm from './review-form/ReviewForm.component';
import { connect } from 'react-redux';

const Reviews = ({ currentMovie }) => {
  const [formHidden, toggleFormHidden] = useState(true);
  return (
    <ReviewsContainer>
      <h1>
        Reviews (1)
        <Button onClick={() => toggleFormHidden(!formHidden)}>
          Add Review
        </Button>
      </h1>
      <ReviewForm
        title={currentMovie.movieInfo.title}
        formHidden={formHidden}
        toggleFormHidden={toggleFormHidden}
      />
      <ReviewContainer>
        <Review currentUser={true} />
      </ReviewContainer>
    </ReviewsContainer>
  );
};

const mapStateToProps = ({ movie }) => ({
  currentMovie: movie.movie
});

export default connect(mapStateToProps)(Reviews);
