import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar-nav/Sidebar';
import Homepage from './pages/home/Home.component';
import Movie from './pages/movie/movie';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <SearchBar />
      <Switch>
        <Redirect from="/movies/movie/:id" to="/movie/:id" />
        <Route exact path="/movie/:id" component={Movie} />
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
