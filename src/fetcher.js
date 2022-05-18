import axios from "axios";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use
const api_key = "665e4ef7392dfcaa4509573e96026ff3";
export const getMovieFromApi = (movieId1) => {
  const movieId = 550;
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
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
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
  );
};

export const getGenresFromApi = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
