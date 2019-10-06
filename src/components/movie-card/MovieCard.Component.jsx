import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 350px;
  width: 200px;
  text-align: center;
`;

const MovieCard = ({ image, title, id }) => {
  return (
    <Card>
      <img
        style={{ height: '90%', width: '100%' }}
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={'dank'}
      />
      <h3 style={{ color: 'white', fontWeight: 'normal' }}>{title}</h3>
    </Card>
  );
};

export default MovieCard;
