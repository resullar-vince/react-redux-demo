import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { CoverDetails } from "../../books";

export const CoverCarousel = ({ books, title, linkSlug }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <>
      <div className="cover-carousel-header">
        <div className="carousel-title">
          <h2>{title}</h2>
        </div>
        <a className="carousel-link" href={"/books/" + linkSlug}>
          See all
        </a>
      </div>
      <Slider {...settings}>
        {books.map((book) => (
          <CoverDetails key={book.id} {...book} />
        ))}
      </Slider>
    </>
  );
};

CoverCarousel.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  linkSlug: PropTypes.string.isRequired,
};
