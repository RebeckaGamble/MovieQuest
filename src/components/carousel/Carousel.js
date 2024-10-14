import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function CarouselSlider() {
  const carouselImages = [
    {
      id: 1,
      src: "/img/potter.jpg",
      alt: "Harry Potter",
      width: 430,
      height: 300,
      description: "Harry Potter",
    },
    {
      id: 2,
      src: "/img/batman.jpg",
      alt: "Batman",
      width: 430,
      height: 300,
      description: "Batman",
    },
    {
      id: 3,
      src: "/img/war.jpg",
      alt: "War",
      width: 430,
      height: 300,
      description: "War",
    },
  ];

  const customIndicator = (clickHandler, isSelected, hover, index, label) => {
    const indicatorStyle = {
      width: isSelected ? "16px" : "10px",
      height: isSelected ? "16px" : "10px",
      background: isSelected ? "#c8c8c8" : "#c4c4c4",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0 8px",
      cursor: "pointer",
    //  background: hover ? "black" : "#c4c4c4",
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

  return (
    <Carousel
      renderIndicator={customIndicator}
      renderThumbs={() => null}
      autoPlay
      infiniteLoop
      className="w-[400px] h-[600px] mx-auto"
    >
      {carouselImages.map((image) => {
        return (
          <div key={image.id} className="w-[400px] h-[300px]">
            <img
              className="max-h-fit w-full"
              height={image.height}
              src={image.src}
              alt={image.alt}
            />
            <p className="pt-4">{image.description}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselSlider;
