import React from 'react';
import './App.scss';
import MovieCard from './components/movie-card/MovieCard.Component';
import MovieInfo from './components/movie-info/MovieInfo.component';
import SearchBar from './components/search-bar/SearchBar.component';
import Axios from 'axios';
import Sidebar from './components/sidebar-nav/Sidebar';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/home/Home.component';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route
          exact
          path="/movies/(Popular|Upcoming|TopRated|NowPlaying)/"
          component={Homepage}
        />
      </Switch>
    </div>
  );
}

export default App;
