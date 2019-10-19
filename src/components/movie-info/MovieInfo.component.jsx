import React from 'react';
import { MovieDetailsContainer, MovieImg } from './MovieInfo.styles';

const MovieInfo = ({ title, summary, genres, director, img }) => (
  <MovieDetailsContainer>
    <MovieImg>
      <img
        src="https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY1200_CR99,0,630,1200_AL_.jpg"
        alt=""
        style={{ width: '100%', height: '80%' }}
      />
    </MovieImg>
    <div className="yellow" style={{ paddingLeft: '40px' }}>
      <h1>Kill Bill</h1>
      <h3 style={{ fontWeight: 'normal', marginBottom: '5px' }}>
        Action/Crime
      </h3>
      <h3 className="white" style={{ fontWeight: 'normal' }}>
        Quentin Tarantino
      </h3>
      <p className="gray" style={{ marginTop: '25px' }}>
        An assassin is shot by her ruthless employer, Bill, and other members of
        their assassination circle – but she lives to plot her vengeance.
      </p>
    </div>
  </MovieDetailsContainer>
);

export default MovieInfo;
