import { firestore } from './firebase.utils';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user.');
    }
  }
  return userRef;
};

export const realTimeMovieFavorites = (currentUser, setCurrentUser) => {
  if (!currentUser) return;
  let subscription = null;
  try {
    subscription = firestore
      .collection(`users/${currentUser.id}/favorites`)
      .onSnapshot(async snapShot => {
        let changes = await snapShot.docChanges();
        let favorites = [...currentUser.favorites];

        changes.forEach(change => {
          let movie = change.doc.data();
          let indexOf = favorites.findIndex(movies => movies.id === movie.id);
          if (change.type === 'added' && indexOf < 0) {
            favorites.push(movie);
          } else if (change.type === 'removed') {
            favorites.splice(indexOf, 1);
          }
        });
        if (currentUser.favorites.length !== favorites.length) {
          setCurrentUser({
            ...currentUser,
            favorites
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
  return subscription;
};

export const addorRemoveMovieToFavorites = async (userId, movieId, title) => {
  const userRef = firestore.doc(`users/${userId}/favorites/${movieId}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    try {
      userRef.set({
        id: movieId,
        title: title
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    userRef.delete();
  }
};
