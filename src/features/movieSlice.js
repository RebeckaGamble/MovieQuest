import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  favourites: [],
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Async action to fetch movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?page=4&limits=20`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    console.log("Fetched movie data:", response.data);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw new Error(
      error.response
        ? error.response.data.status_message
        : "Something went wrong."
    );
  }
});

//Slice
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    sortMovies: (state, action) => {
      const sortBy = action.payload;
      state.sortBy = sortBy;
      if (sortBy === "title") {
        state.movies.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === "release_date") {
        state.movies.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      }
    },
    addToFavourites: (state, action) => {
      const movie = action.payload;
      const alreadyInFav = state.favourites.some(
        (fav) => fav.id === movie.id
      );
      if (!alreadyInFav) {
        state.favourites.push(movie);
      }
    },
    removeFromFavourites: (state, action) => {
      const movieId = action.payload;
      state.favourites = state.favourites.filter((fav) => fav.id !== movieId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { sortMovies, addToFavourites, removeFromFavourites } =
  movieSlice.actions;

export default movieSlice.reducer;
