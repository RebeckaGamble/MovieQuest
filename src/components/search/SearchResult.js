import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genreMap } from "../movies/GenreList";

const highlightSearchTerm = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

function SearchResult({ onLinkClick }) {
  const searchResults = useSelector((state) => state.search.searchedResults);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  if (!searchResults || searchResults.length === 0) {
    return (
      <div className="bg-white w-full mx-auto px-2 py-2">
        <p className="text-black">No movies found matching your search.</p>
      </div>
    );
  }
  console.log("from result search", searchResults, searchTerm);

  return (
    <div className="">
      <ul className="bg-white px-4 py-2">
        {searchResults.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} onClick={onLinkClick}>
            <li className="text-black flex flex-row py-2 justify-between items-center border-b">
              <div className="flex flex-col">
                <h2 className="font-semibold text-[18px]">
                  {highlightSearchTerm(movie.title, searchTerm)}
                </h2>
                <p>
                  {movie.genre_ids
                    .map((id) => genreMap[id])
                    .filter((genre) => genre)
                    .map((genre) => highlightSearchTerm(genre, searchTerm))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
              </div>
              <div>
                {movie.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    style={{ width: "70px", height: "70px" }}
                  />
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
