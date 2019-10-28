import Axios from 'axios';
import apiKey from './../../config/key';

const getMovies = async id => {
  let movieInfo = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  ).then(movie => movie.data);
  let movieCredits = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}
  `
  ).then(credit => credit);

  return { movieInfo, movieCredits };
};

export { getMovies };
