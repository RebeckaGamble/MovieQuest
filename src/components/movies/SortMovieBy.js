import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortMovies } from "../../features/movieSlice";

function SortMovieBy() {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.movies);

  const handleSortChange = (e) => {
    dispatch(sortMovies(e.target.value));
  };

  return (
    <div className="pl-4">
      <label
        htmlFor="sortBy"
        className="mr-2 text-2xl font-semibold text-[#01b4e4]"
      >
        Sort movies by{" "}
      </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleSortChange}
        className="px-2 py-1 text-black border border-gray-600 rounded-md"
      >
        <option value="title">Title</option>
        <option value="release_date">Release Date</option>
      </select>
    </div>
  );
}

export default SortMovieBy;
