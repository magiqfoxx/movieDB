import React from "react";

import { useMovie } from "../../movie-context";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/MovieList";

import {
  DiscoverWrapper,
  MobilePageTitle,
  TotalCount,
  MovieFilters,
  MovieResults,
} from "./styled";

const ratingOptions = [
  { id: 7.5, name: 7.5 },
  { id: 8, name: 8 },
  { id: 8.5, name: 8.5 },
  { id: 9, name: 9 },
  { id: 9.5, name: 9.5 },
  { id: 10, name: 10 },
];
const languageOptions = [
  { id: "GR", name: "Greek" },
  { id: "EN", name: "English" },
  { id: "RU", name: "Russian" },
  { id: "PO", name: "Polish" },
];
const Discover = () => {
  const { state } = useMovie();
  // const [state1, setState1] = useState({
  //   keyword: "",
  //   year: 0,
  //   results: [],
  //   totalCount: 0,
  //   genreOptions: [],
  // });
  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  // const {
  //   genreOptions,
  //   languageOptions,
  //   ratingOptions,
  //   totalCount,
  //   results,
  // } = this.state;
  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{state.movies.length} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={state.genres}
          ratings={ratingOptions}
          languages={languageOptions}
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
