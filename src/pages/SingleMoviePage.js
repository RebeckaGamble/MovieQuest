import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SingleMoviePage() {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p className="text-white">Movie not found!</p>;
  }

  return (
    <div className="text-white">
      <div className="py-10 px-4 2xl:px-0">

      <h3>{movie.titel}</h3>
      <p>movie ID: {movie.id}</p>
      </div>
    </div>
  );
}
