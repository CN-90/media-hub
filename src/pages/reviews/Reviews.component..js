import React from 'react';
import { PageTitle } from './../../app.styles';
import { connect } from 'react-redux';
import Review from './../../components/reviews/review/Review.component';
import { ReviewsContainer } from './../../components/reviews/Reviews.styles';

const Reviews = ({ currentUser }) => {
  return (
    <div>
      <PageTitle>Reviews ({currentUser.reviews.length})</PageTitle>
      <ReviewsContainer>
        {currentUser.reviews.map(review => (
          <Review
            reviewDetails={review}
            currentUser={currentUser}
            displayTitle={true}
            key={review.movieId}
          />
        ))}
      </ReviewsContainer>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Reviews);
