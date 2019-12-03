import React, { useState } from 'react';
import Ratings from 'react-ratings-declarative';

const Rating = ({ rating, changeable }) => {
  const [currentRating, changeRating] = useState(rating);
  let canChange = changeable ? changeRating : null;

  return (
    <div>
      <Ratings
        rating={currentRating}
        widgetRatedColors="#ffe247"
        changeRating={canChange}
      >
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
      </Ratings>
    </div>
  );
};

export default Rating;
