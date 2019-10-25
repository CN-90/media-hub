import React from 'react';
import { MovieDetailsContainer, MovieImg } from './Movie-details.styles';

const MovieDetails = ({
  title,
  summary,
  genres,
  poster,
  backdrop,
  crew,
  release_date
}) => {
  const yearOfRelease = release_date ? release_date.split('-')[0] : '';
  const directorName = crew
    ? crew.crew.filter(crewMember => crewMember.job === 'Director')
    : null;
  const movieGenres = genres ? genres.map(genre => genre.name).join(' / ') : '';

  return (
    <MovieDetailsContainer>
      <MovieImg>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt=""
          style={{ width: '100%', height: '80%' }}
        />
      </MovieImg>
      <div style={{ paddingLeft: '40px', color: 'white' }}>
        <h1 style={{ paddingBottom: '7px' }}>
          {title} {yearOfRelease ? `(${yearOfRelease})` : ''}
        </h1>
        <h3
          className="yellow"
          style={{ fontWeight: 'normal', marginBottom: '5px' }}
        >
          {movieGenres}
        </h3>
        <h3 className="white" style={{ fontWeight: 'normal' }}>
          {directorName.length ? directorName[0].name : 'N/A'}
        </h3>
        <p style={{ marginTop: '25px', color: '#8e8e8e' }}>{summary}</p>
      </div>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
