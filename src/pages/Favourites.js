import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { genreMap } from "../components/movies/GenreList";
import AddToFavourites from "../components/favourites/AddToFavourites";

function Favourites() {
  const fav = useSelector((state) => state.movies.favourites);

  return (
    <div className="py-6 lg:py-10 px-4 2xl:px-0">
      <h1 className="text-white text-2xl pb-6">Your Favourites</h1>
      <ul className="flex flex-wrap gap-y-6 w-full gap-x-6 lg:justify-between">
        {fav.length > 0 ? (
          fav.map((movie, id) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg shadow-[#90cea1] text-black max-w-[460px] h-auto pb-6 flex flex-col items-center justify-center"
            >
              <div className="w-full h-full flex flex-col gap-y-2 mx-auto relative">
                {movie.poster_path && (
                  <div className="lg:w-[460px] w-full">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                      className="object-cover w-auto h-full rounded-t-lg"
                    />
                  </div>
                )}
                <div className="flex relative justify-between items-start w-full px-4 lg:px-6">
                  <div className="flex flex-col py-2 gap-y-1">
                    <h3 className="text-xl lg:text-2xl pb-2 pt-8 font-semibold">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-[18px]">Genre:</h3>
                      {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-[18px]">
                        Original title:
                      </h3>
                      <p>{movie.original_title}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-[18px]">Language:</h3>
                      <span className="uppercase">
                        {movie.original_language}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-[18px]">
                        Release date:
                      </h3>
                      <p>{movie.release_date}</p>
                    </div>
                    <div className="flex flex-col pt-4">
                      <h3 className="font-semibold pb-1 text-[18px]">
                        Overview
                      </h3>
                      <p className="">{movie.overview}</p>
                    </div>
                  </div>
                  <AddToFavourites
                    css="absolute right-0 top-0"
                    size={24}
                    movie={movie}
                  />
                  <p className="flex gap-1 items-center absolute top-0 left-6">
                    {movie.vote_average} <FaRegStar /> based on{" "}
                    <span>{movie.vote_count} votes</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No favourites added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Favourites;
