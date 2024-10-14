// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   movies: [],
//   loading: false,
//   error: null,
// };

// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//   try {
//     const response = await fetch("data/mockdata.json");
//     if (!response.ok) {
//       throw new Error("Failed to fetch movies.");
//     }
//     const data = await response.json();
//      console.log("data: ", data);
//     return data;
//   } catch (error) {
//     return error.message || error;
//   }
// });


// //Slice
// const mockSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.movies = action.payload;
//         state.loading = false;
//       })

//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Something went wrong";
//       });
//   },
// });

// export default mockSlice.reducer;
