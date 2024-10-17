import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchMovies } from "../../features/movieSlice";

function CarouselSlider() {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const customIndicator = (clickHandler, isSelected, index) => {
    const indicatorStyle = {
      width: isSelected ? "16px" : "10px",
      height: isSelected ? "16px" : "10px",
      background: isSelected ? "#c8c8c8" : "#c4c4c4",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0 8px",
      cursor: "pointer",
    };

    return (
      <li
        style={indicatorStyle}
        onClick={clickHandler}
        key={index}
        role="button"
        aria-label={`Slide ${index + 1}`}
      />
    );
  };

  const carouselImages = movies.slice(1, 6);

  return (
    <Carousel
      renderIndicator={customIndicator}
      renderThumbs={() => null}
      statusFormatter={() => null}
      autoPlay
      showArrows={false}
      infiniteLoop
      className="max-w-[90rem] h-auto mx-auto"
    >
      {carouselImages.map((image) => {
        return (
          <div
            key={image.id}
            className="w-auto h-full max-h-[800px] mx-auto relative"
          >
            <img
              className="h-auto w-auto object-contain"
              src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
              alt={image.title}
            />
            <p
              className="absolute bottom-4 text-[16px] xl:text-[20px] left-4 text-white"
              style={{ textShadow: "1px 1px black" }}
            >
              {image.title}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselSlider;
