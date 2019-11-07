import React from 'react';
import { ActorImgContainer, ActorCard } from './Movie-cast.styles';
import placeholder from '../../../assets/user-placeholder.jpg';

const Actor = ({ image, name }) => {
  return (
    <ActorCard>
      <ActorImgContainer>
        <img
          src={
            image === null
              ? placeholder
              : `https://image.tmdb.org/t/p/original/${image}`
          }
          alt="Actor img"
        />
      </ActorImgContainer>
      <h3 style={{ paddingTop: '5px' }}>{name}</h3>
    </ActorCard>
  );
};

export default Actor;
