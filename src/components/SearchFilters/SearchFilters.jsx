import React from "react";

import SearchBar from "../SearchBar";
import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";
import {
  FiltersWrapper,
  SearchFiltersCont,
  SearchFiltersContBottom,
  CategoryTitle,
  Button,
} from "./styled";
import AccordionFilter from "../AccordionFilter";
import { useMovie } from "../../movie-context";

export default function SearchFilters() {
  const { state, dispatch } = useMovie();

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
          handleSearch={(value) =>
            dispatch({ type: "setQuery", payload: value })
          }
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
          handleSearch={(value) =>
            dispatch({ type: "setYear", payload: value })
          }
        />
      </SearchFiltersCont>
      <SearchFiltersContBottom>
        <CategoryTitle>Movies</CategoryTitle>
        {state.genres && (
          <AccordionFilter title="genre(s)" options={state.genres} />
        )}
        {state.ratings && (
          <AccordionFilter title="min. vote" options={state.ratings} />
        )}
        {state.languages && (
          <AccordionFilter title="language" options={state.languages} />
        )}
        <Button onClick={() => dispatch({ type: "getMovie" })}>Search</Button>
      </SearchFiltersContBottom>
    </FiltersWrapper>
  );
}
