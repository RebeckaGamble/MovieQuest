import React, { useEffect, useState } from "react";
import Tooltip from "../Tooltip";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../features/movieSlice";

function AddToFavourites({ css, size, movie }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.movies.favourites);

  useEffect(() => {
    if (movie) {
      const inFav = favourites.some((fav) => fav.id === movie.id);
      setIsFavourite(inFav);
    }
  }, [favourites, movie]);

  const toggleAddToFav = () => {
    if (!movie || !movie.id) {
      console.error("Invalid movie object:", movie);
      return;
    }
    if (isFavourite) {
      dispatch(removeFromFavourites(movie.id));
    } else {
      dispatch(addToFavourites(movie));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="flex flew-col">
      <Tooltip
        tooltip={isFavourite ? "Remove from favourites" : "Save to favourites"}
      >
        <button onClick={toggleAddToFav} className={css}>
          {!isFavourite ? (
            <FaRegHeart size={size} />
          ) : (
            <FaHeart size={size} />
          )}
        </button>
      </Tooltip>
    </div>
  );
}

export default AddToFavourites;
