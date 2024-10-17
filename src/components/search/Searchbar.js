import React, { useEffect, useRef, useState } from "react";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { searchResults, setSearchTerm } from "../../features/searchSlice";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const searchContainerRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(setSearchTerm(searchInput));
      dispatch(searchResults({ movies }));
      setShowResults(true);
    }
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.trim()) {
      dispatch(setSearchTerm(inputValue));
      dispatch(searchResults({ movies }));
      setShowResults(true);
    } else {
      dispatch(setSearchTerm(""));
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
        setSearchInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setShowResults(false);
  };

  return (
    <div className="w-full bg-[#0d253f] flex h-auto py-8 items-center justify-center mx-auto">
      <div
        ref={searchContainerRef}
        className="flex flex-col w-full mx-auto max-w-[400px]"
      >
        <form action="" onSubmit={handleSearchSubmit}>
          <label htmlFor="searchInput"></label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search movie"
            onChange={handleSearchInputChange}
            value={searchInput}
            className="border border-slate-800 px-2 py-1 bg-white text-black w-full "
          />
        </form>
        {searchInput && showResults && (
          <SearchResult onLinkClick={handleLinkClick} />
        )}
      </div>
    </div>
  );
}

export default Searchbar;
