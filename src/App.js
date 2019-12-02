import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './components/search-bar/SearchBar.component';
import Sidebar from './components/sidebar/Sidebar';
import Movies from './pages/Movies/Movies.component';
import Movie from './pages/movie/Movie';
import AuthPage from './pages/auth/Auth.component';
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { getUsersFavorites } from './firebase/movies.utils';
import { createUserProfileDocument } from './firebase/users.utils';
import Favorites from './pages/favorites/Favorites.component';

const ErrorPage = () => (
  <div>
    <h1 style={{ paddingTop: '200px', marginleft: '200px' }}>Page Not Found</h1>
  </div>
);

function App({ setCurrentUser, currentUser }) {
  const [menuHidden, setMenuHidden] = useState(true);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async snapShot => {
          let favorites = await getUsersFavorites(snapShot.id);
          setCurrentUser({
            id: snapShot.id,
            favorites,
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
          <Route
            exact
            path="/(signin|signup)"
            render={props =>
              currentUser ? (
                <Redirect to="/movies/popular/1" />
              ) : (
                <AuthPage {...props} />
              )
            }
          />

          <Route
            path="/movies/(popular|upcoming|top_rated|now_playing|search|favorites)/:searchQuery?/movie/:id"
            component={Movie}
          />
          <Route
            exact
            path="/movies/(popular|upcoming|top_rated|now_playing)/:movieName?/:pageNumber"
            component={Movies}
          />
          <Route
            exact
            path="/movies/search/:movieName?/:pageNumber?"
            component={Movies}
          />
          <Route exact path="/movies/favorites" component={Favorites} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
