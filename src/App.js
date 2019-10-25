import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar/Sidebar';
import Movies from './pages/Movies/Movies.component';
import Movie from './pages/movie/Movie';

const ErrorPage = () => (
  <h1 style={{ fontSize: '10rem' }}>Sorry Page Not Found</h1>
);

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
          path="/movies/(popular|upcoming|top_rated|now_playing|search)/"
          component={Movies}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
