import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar/Sidebar';
import Movies from './pages/Movies/Movies.component';
import Movie from './pages/movie/Movie';
import Pagination from './components/pagination/Pagination.component';

const ErrorPage = () => <Pagination pageNumber={1} />;

function App() {
  return (
    <div className="App">
      <Sidebar />
      <SearchBar />
      <div className="container">
        <Switch>
          <Redirect from="/movies/:pageNumber/movie/:id" to="/movie/:id" />
          <Route exact path="/movie/:id" component={Movie} />
          <Route
            exact
            path="/movies/(popular|upcoming|top_rated|now_playing|search)/:pageNumber"
            component={Movies}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
