import React from "react";

import { InputWrapper } from "./styled";

export default function SearchBar({
  icon,
  id,
  type,
  placeholder,
  handleSearch,
}) {
  return (
    <InputWrapper className="search_bar_wrapper">
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
