// return page title depending on url location passed in as title
export const getPageTitle = (title, search) => {
  const titles = {
    top_rated: 'Top Rated',
    upcoming: 'Upcoming Movies',
    popular: 'Popular Movies',
    now_playing: 'Now Playing',
    search: search
      ? `Search results for ${search}`
      : 'Search database for movies'
  };
  return titles[title];
};

// takes all genres of a movie and combines them in a formatted string.
export const getMovieGenres = genreArr => {
  return genreArr.map(genre => genre.name).join(' / ');
};

// Cylcles through movie Crew members and filtres out the director.
export const getDirectorsName = crew => {
  return crew.crew.filter(crewMember => crewMember.job === 'Director');
};

// Formats the movie release date to select only the year of release.
export const formatMovieReleaseDate = release_date => {
  return release_date.split('-')[0];
};

// Checks whether the current movie is liked by a user.
export const isCurrentMovieLiked = (currentUser, id) => {
  let index = currentUser.favorites.findIndex(movie => movie.id === id);
  return index >= 0;
};

export const isCurrentMovieReviewed = (currentUser, movieId) => {
  let index = currentUser.reviews.findIndex(
    review => review.movieId === movieId
  );
  return {
    beenReviewed: index >= 0,
    review: currentUser.reviews[index]
  };
};

export const filterOutDeletedReview = (currentState, movieId) => {
  return currentState.filter(review => review.movieId !== movieId);
};

// validaes password for sign ups.
export const validatePassword = (passwordOne, passwordTwo) => {
  if (passwordOne.length < 6) {
    return 'Password must be more than six characters';
  } else if (passwordOne !== passwordTwo) {
    return 'Passwords do not match.';
  }
};
