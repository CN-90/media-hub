import React from 'react';
import { MovieDetailsContainer, MovieImg } from './MovieInfo.styles';

const MovieInfo = ({ title, summary, genres, director, image }) => (
  <MovieDetailsContainer>
    <MovieImg>
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt=""
        style={{ width: '100%', height: '80%' }}
      />
    </MovieImg>
    <div className="yellow" style={{ paddingLeft: '40px' }}>
      <h1>{title}</h1>
      <h3 style={{ fontWeight: 'normal', marginBottom: '5px' }}>
        Action/Crime
      </h3>
      <h3 className="white" style={{ fontWeight: 'normal' }}>
        Quentin Tarantino
      </h3>
      <p className="gray" style={{ marginTop: '25px' }}>
        {summary}
      </p>
    </div>
  </MovieDetailsContainer>
);

export default MovieInfo;
