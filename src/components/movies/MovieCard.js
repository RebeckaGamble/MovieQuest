import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../features/movieSlice";
import AddToFavourites from "../favourites/AddToFavourites";
import { genreMap } from "./GenreList";
import SortMovieBy from "./SortMovieBy";

function MovieCard() {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <p className="">loading..</p>;
  }

  if (error) {
    return <p className="text-red-600">{error.message || error}</p>;
  }

  return (
    <div className="h-auto py-10">
      <div className="flex h-20 bg-white items-center mb-10">
        <SortMovieBy />
      </div>
      <div className="px-4 2xl:px-0 ">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {movies.length > 0
            ? movies &&
              movies.map((movie) => (
                <div
                  className="flex flex-col shadow-white w-full relative h-auto mx-auto bg-[#0d253f] text-white shadow-2xl"
                  key={movie.id}
                >
                  <div className="w-full h-auto ">
                    <Link to={`/movies/${movie.id}`}>
                      {movie.backdrop_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                          alt={movie.title}
                        />
                      )}
                    </Link>
                    <AddToFavourites
                      css={"absolute right-0 top-0 p-2 "}
                      size={20}
                      movie={movie}
                    />
                  </div>
                  <Link to={`/movies/${movie.id}`}>
                    <div className="flex flex-col gap-2 px-4 pb-6">
                      <h2 className="font-semibold text-xl">{movie.title}</h2>
                      <p>{movie.release_date}</p>
                      <div className="flex gap-1">
                        <h3 className="font-semibold">Language: </h3>
                        <span className="uppercase">
                          {movie.original_language}
                        </span>
                      </div>
                      <p className="flex gap-1 items-center">
                        {movie.vote_average} <FaRegStar color="yellow" /> based
                        on <span>{movie.vote_count} votes</span>
                      </p>
                      <div className="flex flex-col">
                        <h3 className="font-semibold pb-1">Overview</h3>
                        <p>{movie.overview}</p>
                      </div>
                      <ul>
                        <h3 className="font-semibold pb-1">Genre:</h3>
                        {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
