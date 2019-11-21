import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar/Sidebar';
import Movies from './pages/Movies/Movies.component';
import Movie from './pages/movie/Movie';
import AuthPage from './pages/auth/Auth.component';
import { auth } from './firebase/firebase.utils';

const ErrorPage = () => (
  <div>
    <h1 style={{ marginnTop: '200px', marginleft: '200px' }}>
      Page not found dawg
    </h1>
  </div>
);

function App() {
  useEffect(() => {
    // auth.onAuthStateChanged(user => console.log(user));
  }, []);
  const [menuHidden, setMenuHidden] = useState(true);
  return (
    <div className="App">
      <Sidebar menuHidden={menuHidden} setMenuHidden={setMenuHidden} />
      <SearchBar menuHidden={menuHidden} setMenuHidden={setMenuHidden} />
      <div className="container">
        <Switch>
          <Route exact path="/(signin|signup)" component={AuthPage} />
          <Route
            path="/movies/(popular|upcoming|top_rated|now_playing|search)/:searchQuery?/:pageNumber/movie/:id"
            component={Movie}
          />
          <Route
            exact
            path="/movies/(popular|upcoming|top_rated|now_playing|search)/:movieName?/:pageNumber"
            component={Movies}
          />
          <Route
            exact
            path="/movies/search/:movieName?/:pageNumber?"
            component={Movies}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
