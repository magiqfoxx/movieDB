import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export const getMovieFromApi = (movieId1) => {
  const movieId = 550;
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const searchMoviesFromApi = (query) => {
  return (
    query &&
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(function (response) {
        return response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      })
  );
};

export const getGenresFromApi = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
    )
    .then(function (response) {
      return response.data.genres;
    })
    .catch(function (error) {
      console.log(error);
    });
};
