import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favourites: [],
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?page=4&limits=20&api_key=${API_KEY}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.status_message || "Something went wrong.");
    }

    const data = await response.json();
    console.log("Fetched movie data:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw new Error(
      error.message || "Something went wrong."
    );
  }
});

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

export const { sortMovies, addToFavourites, removeFromFavourites } = movieSlice.actions;

export default movieSlice.reducer;
