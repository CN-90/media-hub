import React, { useState } from 'react';
import Ratings from 'react-ratings-declarative';

const Rating = () => {
  const [rating, changeRating] = useState(0);

  return (
    <div>
      <Ratings rating={4} widgetRatedColors="gold" changeRating={changeRating}>
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="gold" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="gold" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="gold" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="gold" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="gold" />
      </Ratings>
    </div>
  );
};

export default Rating;
