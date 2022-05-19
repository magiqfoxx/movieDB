import React, { useEffect } from "react";

//import { getMovie, searchMovie } from "../../fetcher";
import { useMovie } from "../../movie-context";

import MovieItem from "../MovieItem";
import { MoviesWrapper } from "./styled";

export default function MovieList() {
  const { state } = useMovie();

  return (
    <MoviesWrapper>
      {state.movies?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesWrapper>
  );
}
