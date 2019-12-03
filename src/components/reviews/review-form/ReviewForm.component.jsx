import React from 'react';
import { ReviewFormContainer, ReviewTextArea } from './ReviewForm.styles';
import Rating from '../../rating/Rating.component';
import Button from './../../button/Button.component';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewForm = ({ formHidden, toggleFormHidden, title }) => {
  return (
    <ReviewFormContainer isHidden={formHidden}>
      <h1>{title}</h1>
      <span onClick={() => toggleFormHidden(!formHidden)}>
        <FontAwesomeIcon icon={faTimesCircle} color={'gray'} />
      </span>
      <form>
        <div>
          <Rating
            style={{ paddingBottom: '100px' }}
            rating={0}
            changeable={true}
          />
        </div>
        <ReviewTextArea
          placeholder={`Leave your review for ${title}`}
        ></ReviewTextArea>
        <Button>Submit</Button>
      </form>
    </ReviewFormContainer>
  );
};

export default ReviewForm;
