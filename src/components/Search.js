import React from "react";

function Search({ onSearch, searchText }) {

  return (
    <form className="searchbar">
      <label>🔍</label>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </form>
  );
}

export default Search;
