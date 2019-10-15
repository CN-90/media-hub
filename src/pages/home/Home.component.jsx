import React from 'react';
import { Home } from './Home.styles';

const Homepage = props => {
  console.log(props.location.state);
  console.log(props.match.params);
  return (
    <Home>
      <h1 style={{ color: 'white' }}>{props.location.state.searchLink}</h1>
    </Home>
  );
};

export default Homepage;
