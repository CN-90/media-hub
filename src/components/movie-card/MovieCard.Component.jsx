import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Card = styled.div`
  height: 350px;
  width: 200px;
  text-align: center;
  padding-bottom: 50px;

  div {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

const MovieCard = ({ history, image, title, id, score }) => {
  return (
    <Card>
      <div onClick={() => history.push(`/movie/${id}`)}>
        <img
          style={{
            height: '90%',
            width: '100%',
            borderRadius: '5px 5px 0px 0px'
          }}
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={'dank'}
        />
        <h2
          style={{
            color: '#E2E2E2',
            fontWeight: 'normal',
            background: '#196aef',
            padding: '5px'
          }}
        >
          {title}
        </h2>
      </div>
    </Card>
  );
};

export default withRouter(MovieCard);
