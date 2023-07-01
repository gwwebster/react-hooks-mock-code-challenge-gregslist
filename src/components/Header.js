import React from "react";
import Search from "./Search";

function Header({ onSearch, searchText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} searchText={searchText} />
    </header>
  );
}

export default Header;
