import React from "react";

const SearchBox = ({searchChanged}) => {
  return (
    <nav className="pa2">
      <input
        className="bg-hot-pink ba b--light-blue pa3"
        type="search"
        placeholder="search cats"
        onChange={searchChanged}
      />
    </nav>
  );
};

export default SearchBox;
