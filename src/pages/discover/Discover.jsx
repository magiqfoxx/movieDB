import React, { useEffect } from "react";

import { useMovie } from "../../movie-context";

import SearchFilters from "../../components/SearchFilters";
import MovieList from "../../components/MovieList";

import {
  DiscoverWrapper,
  MobilePageTitle,
  TotalCount,
  MovieFilters,
  MovieResults,
} from "./styled";
import { searchMoviesFromApi, getGenresFromApi } from "../../fetcher";

const Discover = () => {
  const { state, dispatch } = useMovie();

  useEffect(() => {
    getGenresFromApi(state.query).then((data) => {
      dispatch({
        type: "setGenres",
        payload: data,
      });
    });
  }, []);
  useEffect(() => {
    if (state.query) {
      searchMoviesFromApi(state.query, state.year, state.language).then(
        (data) => {
          dispatch({
            type: "setSearchedMovies",
            payload: data,
          });
        }
      );
    }
  }, [state.query, state.year, state.language, dispatch]);

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{state.movies ? state.movies.length : 0} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={state.genres}
          ratings={state.ratingOptions}
          languages={state.languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList movies={state.movies || []} genres={state.genres || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
};

export default Discover;
