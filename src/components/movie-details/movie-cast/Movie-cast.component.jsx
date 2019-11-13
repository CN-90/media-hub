import React from 'react';
import Actor from './Actor.component';
import { MovieCastContainer, ActorsContainer } from './Movie-cast.styles';

const MovieCast = ({ cast: { cast } }) => {
  return cast.length ? (
    <MovieCastContainer
      style={{
        width: '80%',
        margin: '0 auto',
        paddingTop: '65px',
        color: '#ffffff'
      }}
    >
      <h1>Cast</h1>
      <ActorsContainer>
        {cast.slice(0, 10).map(actor => {
          return <Actor image={actor.profile_path} name={actor.name} />;
        })}
      </ActorsContainer>
    </MovieCastContainer>
  ) : null;
};

export default MovieCast;
