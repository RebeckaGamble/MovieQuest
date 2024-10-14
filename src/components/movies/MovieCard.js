import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../features/movieSlice";

function MovieCard() {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    14: "Fantasy",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    878: "Science Fiction",
    10749: "Romance",
    10752: "War",
    37: "Western",
  };

  if (loading) {
    return <p className="">loading..</p>;
  }

  if (error) {
    return <p className="text-red-600">{error.message || error}</p>;
  }

  return (
    <div className="h-auto py-10 px-4 2xl:px-0">
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {movies.length > 0
            ? movies &&
              movies.slice(0, 2).map((movie) => (
                <Link
                  className="flex flex-col w-full py-6 h-auto mx-auto bg-[#0d253f] text-white shadow-md"
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                >
                  <div className="h-full px-4">
                    <div className="w-full h-[224px]">
                      {movie.backdrop_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                          alt={movie.title}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold text-xl">{movie.title}</h2>
                      <div className="flex">
                        <h3 className="font-semibold">Language:</h3>
                        <span className="uppercase">
                          {movie.original_language}
                        </span>
                      </div>
                      <p className="flex gap-1 items-center">
                        {movie.vote_average} <FaRegStar /> from{" "}
                        <span>{movie.vote_count} votes</span>
                      </p>
                      <div className="flex">
                        <h3 className="font-semibold">Release date: </h3>
                        <p>{movie.release_date}</p>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold pb-1">Overview</h3>
                        <p>{movie.overview}</p>
                      </div>
                      <ul>
                        <h3 className="font-semibold pb-1">Genre:</h3>
                        {movie.genre_ids.map((genreId) => (
                          <li key={genreId}>
                            {movie.genre_ids
                              .map((id) => genreMap[id] || "Unknown Genre") // Map genre IDs to names
                              .join(", ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/**
                   * add to single page movie.original_title
                     {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                   */}
                </Link>
              ))
            : null}
        </ul>
        {/**mockdata */}
        {/* <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6"> */}
        {/* {movies &&
              movies
                .slice(0, 2)
                .map((movie) => <li key={movie.id}>{movie.title}</li>)} */}
        {/* {movies.length > 0 ? ( movies &&
            movies.slice(0, 2).map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <li className="flex flex-col w-full py-6 h-auto mx-auto bg-white text-black sm:shadow-yellow-400/70 shadow-md">
                  <div className="h-full px-4">
                    <div className="w-full h-[380px]">
                      <img
                        className="w-full h-full object-cover"
                        src={movie.img}
                        alt={movie.title}
                      />
                    </div>
                    <div className="relative">
                      <h2 className="text-center text-xl font-semibold py-6">
                        {movie.title}
                      </h2>
                      <p>
                        <span className="font-semibold text-lg py-1">
                          Genre:
                        </span>{" "}
                        {movie.genre.join(", ")}
                      </p>

                      <i className="absolute flex flex-row items-center top-2 right-0">
                        Rating: {movie.rating}{" "}
                        <FaRegStar className="pl-1" size={20} />
                      </i>
                      <ul>
                        <span className="font-semibold text-lg py-1">
                          Actors:
                        </span>
                        {movie.actors.map((actor, index) => (
                          <li key={index}> {actor}</li>
                        ))}
                      </ul>
                      <div>
                        <span className="text-lg font-semibold py-1">
                          Plot:
                        </span>
                        <p>{movie.about}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            )) ) : (null) } 
        </ul> */}
      </div>
    </div>
  );
}

export default MovieCard;
