import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/movie-card/MovieCard.Component';
import MovieInfo from './components/movie-info/MovieInfo.component';
import Axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="App">
      {/* {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
        />
      ))} */}
      <MovieInfo />
    </div>
  );
}

export default App;
