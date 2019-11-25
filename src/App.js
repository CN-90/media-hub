import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar/Sidebar';
import Movies from './pages/Movies/Movies.component';
import Movie from './pages/movie/Movie';
import AuthPage from './pages/auth/Auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const ErrorPage = () => (
  <div>
    <h1 style={{ paddingTop: '200px', marginleft: '200px' }}>
      Page not found dawg
    </h1>
  </div>
);

function App({ setCurrentUser }) {
  const [menuHidden, setMenuHidden] = useState(true);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
