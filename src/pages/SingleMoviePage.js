import React, { useEffect, useState } from "react";
import { FaArrowDown, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovies } from "../features/movieSlice";
import { fetchReviews } from "../features/reviewSlice";
import ReviewsModal from "../components/reviews/ReviewsModal";
import AddToFavourites from "../components/favourites/AddToFavourites";
import { genreMap } from "../components/movies/GenreList";

export default function SingleMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  //reviews
  const reviews = useSelector((state) => state.reviews.reviews);
  const loadingReviews = useSelector((state) => state.reviews.loading);
  const error = useSelector((state) => state.reviews.error);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!movies || movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies]);

  const movie = movies.find((movie) => movie.id === parseInt(id));

  useEffect(() => {
    if (movie) {
      dispatch(fetchReviews(movie.id));
    }
  }, [dispatch, movie]);

  // console.log("reviews single page", reviews);

  if (!movie) {
    return (
      <div className="flex flex-col w-full text-center">
        <p className="pt-[60px] px-4 pb-4 text-xl">Movie not found!</p>
        <Link className="text-blue-900 underline" to={"/"}>
          Go back home
        </Link>
      </div>
    );
  }
  console.log("Movie prop in MovieCard:", movie);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-full justify-center text-white">
      <div className="w-full h-auto py-10 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 mx-auto px-4 2xl:px-0">
        {movie.poster_path && (
          <div className="max-w-full max-h-[600px] lg:max-h-[1000px] mx-auto lg:mx-0">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-auto h-full max-h-[600px] lg:max-h-[1000px]"
            />
          </div>
        )}
        <div className="flex flex-col py-6 lg:py-0 gap-2 lg:justify-between w-auto">
          <div className="flex flex-col gap-2 relative h-auto pb-4">
            <div className="flex gap-2">
              <h3 className="text-2xl font-semibold xl:text-4xl">
                {movie.title}{" "}
              </h3>
              <AddToFavourites
                css={"hover:scale-105 p-2"}
                size={20}
                movie={movie}

              />
            </div>
            <div>
              {movie.genre_ids
                .map((id) => genreMap[id]) 
                .join(", ")}
            </div>
            <div className="flex items-center gap-1 pt-2">
              <h3 className="font-semibold text-[18px]"> Original title: </h3>
              <p>{movie.original_title} </p>{" "}
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-[18px]">Language: </h3>
              <span className="uppercase">{movie.original_language}</span>
            </div>
            <p className="flex gap-1 items-center lg:absolute top-1 lg:right-0 lg:top-[-10px]">
              {movie.vote_average} <FaRegStar /> based on{" "}
              <span>{movie.vote_count} votes</span>
            </p>
            <div className="flex gap-1">
              <h3 className="font-semibold text-[18px]">Release date: </h3>
              <p>{movie.release_date}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold pb-1 text-[18px]">Overview </h3>
              <p className="max-w-[800px]">{movie.overview}</p>
            </div>
            <div className="mt-6">
              <button
                className="font-semibold flex items-center gap-1 pb-2 text-[18px] cursor-pointer"
                onClick={openModal}
              >
                See reviews <FaArrowDown />
              </button>
              {loadingReviews ? (
                <p>Loading reviews...</p>
              ) : error ? (
                <p className="text-red-600">{error}</p>
              ) : reviews.length === 0 ? (
                <p>No reviews available for this movie.</p>
              ) : null}
              <ReviewsModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                reviews={reviews}
                loading={loadingReviews}
                error={error}
              />
            </div>
          </div>
          <div className="w-auto h-auto lg:max-w-[800px] mx-auto pt-10 ">
            {movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
