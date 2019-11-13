import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardMovieTitle } from './MovieCard.styles';

const MovieCard = ({ history, image, title, id }) => {
  console.log(history);
  return (
    <Card>
      <div onClick={() => history.push(`/movie/${id}`)}>
        <CardImg
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="movie_img"
        />
        <CardMovieTitle>{title}</CardMovieTitle>
      </div>
    </Card>
  );
};

export default withRouter(MovieCard);
