import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Async action to fetch movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log("Fetched movie data:", response.data);

    return response.data.results; // Return movie-result arr
  } catch (error) {
    console.error("Error fetching movie data:", error); // Log errors
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
  reducers: {},
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

export default movieSlice.reducer;
