import React from "react";

//Styling
import { SearchBarStyled } from "../../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a Product"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
