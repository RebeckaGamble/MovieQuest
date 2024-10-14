import React, { useState } from "react";
import SearchResult from "./SearchResult";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("Clicked search");
    setSearchInput("");
  };

  return (
    <div className="flex flex-col">
      <form
        action=""
        onSubmit={handleSearchSubmit}
        className="bg-white text-black w-full max-w-[400px]"
      >
        <label htmlFor="searchInput"></label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search movie"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="border border-slate-800 px-2 py-1"
        />
      </form>
      <SearchResult />
    </div>
  );
}

export default Searchbar;
