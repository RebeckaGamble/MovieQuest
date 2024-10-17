import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movieSlice";
import searchSlice from "../features/searchSlice"
import reviewSlice from "../features/reviewSlice"

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    search: searchSlice,
    reviews: reviewSlice
  },
});
