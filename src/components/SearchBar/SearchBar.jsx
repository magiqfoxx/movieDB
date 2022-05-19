import React from "react";

import { useMovie } from "../../movie-context";
import { InputWrapper } from "./styled";

export default function SearchBar({ icon, id, type, placeholder }) {
  const { dispatch } = useMovie();

  const handleSearch = (query) => {
    dispatch({ type: "setQuery", payload: query });
  };

  return (
    <InputWrapper
      className="search_bar_wrapper"
      //onSubmit={() => dispatch({ type: "setQuery", payload: query })}
    >
      <img src={icon.src} alt={icon.alt} htmlFor={id} width="25" />
      <input
        type={type}
        id={id}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
