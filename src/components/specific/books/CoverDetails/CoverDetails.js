import React from "react";
import PropTypes from "prop-types";

export const CoverDetails = ({
  title,
  authorName,
  categories = "",
  slug,
  imageUrl,
  rating,
}) => (
  <div className="cover-details-card">
    <a className="cover-image-link" href={"/book/" + slug} title={title}>
      <img
        className="card-img-top cover-image"
        src={imageUrl}
        title={title}
        alt={title}
      />
    </a>
    <div className="card-body">
      <h5 className="card-title">
        <a href={"/book/" + slug}>{title}</a>
      </h5>
      <p className="card-text">Author: {authorName}</p>
      <p className="card-text">Categories: {categories}</p>
      <p className="card-text">Rating: {rating}</p>
    </div>
  </div>
);

CoverDetails.propTypes = {
  authorName: PropTypes.string.isRequired,
  categories: PropTypes.string,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
