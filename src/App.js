import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/movie-card/MovieCard.Component';
import MovieInfo from './components/movie-info/MovieInfo.component';
import SearchBar from './components/search-bar/SearchBar.component';
import Axios from 'axios';
import Sidebar from './components/sidebar-nav/Sidebar';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //   Axios.get(
    //     'https://api.themoviedb.org/3/movie/now_playing?api_key=33a1c0a28f13c7d83d4de63f48874de5&language=en-US&page=1'
    //   ).then(movies => setMovies(movies.data.results));
  }, []);
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
      {/* <SearchBar /> */}
      {/* <MovieInfo /> */}
      <Sidebar />
    </div>
  );
}

export default App;
