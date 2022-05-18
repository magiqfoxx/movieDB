import React, { useEffect } from "react";

//import { getMovie, searchMovie } from "../../fetcher";
import { useMovie } from "../../movie-context";

import MovieItem from "../MovieItem";
import { MoviesWrapper } from "./styled";
import { movies, genres } from "./mock";
import { getMovies } from "./helpers";

export default function MovieList() {
  const { state } = useMovie();
  //const movieList = getMovies(movies.results, genres.genres);

  useEffect(() => {
    //searchMovie(state.query);
    //getMovie();
  }, [state.query]);

  return (
    <MoviesWrapper>
      {state.movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesWrapper>
  );
}
