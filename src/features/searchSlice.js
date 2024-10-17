import { createSlice } from "@reduxjs/toolkit";
import { genreMap } from "../components/movies/GenreList";

const initialState = {
  searchTerm: "",
  searchedResults: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchResults: (state, action) => {
      const { movies } = action.payload;
      const term = state.searchTerm.toLowerCase();
      console.log("Movies received in search movies", movies);

      state.searchedResults = movies.filter((movie) => {
        const titleMatch = movie.title.toLowerCase().includes(term);
        console.log(`Title match for "${movie.title}":`, titleMatch);

        const genreMatch = movie.genre_ids
          .map((id) => genreMap[id]?.toLowerCase())
          .some((genre) => genre && genre.includes(term));
        console.log(`Genre match for "${movie.title}":`, genreMatch);

        return titleMatch || genreMatch;
      });
      console.log("Filtered search results", state.searchedResults);
    },
  },
});

export const { setSearchTerm, searchResults } = searchSlice.actions;

export default searchSlice.reducer;
