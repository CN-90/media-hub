import Axios from 'axios';
import apiKey from './../../config/key';

//Fetch movie details and crew details about specific movie.
export const fetchMovieAsync = async id => {
  let movieInfo = Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
  );
  let movieCredits = Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );

  return await Promise.all([movieInfo, movieCredits]);
};

//Fetch all movies under a specific category - e.g Upcoming movies, popular movies, etc...
export const fetchMoviesAsync = async (category, pageNumber) => {
  return await Axios.get(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  );
};

export const fetchMoviesSearchAsync = async (searchTerm, pageNumber) => {
  return await Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`
  );
};
