import React, { useState } from 'react';
import { ReviewsContainer, ReviewContainer } from './Reviews.styles';
import Button from './../button/Button.component';
import Review from './review/Review.component';
import ReviewForm from './review-form/ReviewForm.component';
import { connect } from 'react-redux';

const Reviews = ({ currentMovie, currentUser }) => {
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
        userId={currentUser.id}
        movieTitle={currentMovie.movieInfo.title}
        movieId={currentMovie.movieInfo.id}
        formHidden={formHidden}
        toggleFormHidden={toggleFormHidden}
      />
      <ReviewContainer>
        <Review currentUser={true} />
      </ReviewContainer>
    </ReviewsContainer>
  );
};

const mapStateToProps = ({ movie, user }) => ({
  currentMovie: movie.movie,
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Reviews);
