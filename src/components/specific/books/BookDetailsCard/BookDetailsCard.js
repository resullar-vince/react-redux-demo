import React from "react";
import PropTypes from "prop-types";

export const BookDetailsCard = ({ book }) => {
  return (
    <div className="book-details-container">
      <div className="details-section">
        <img
          className="cover-image"
          src={book.imageUrl}
          title={book.title}
          alt={book.title}
        />
        <div className="details-summary">
          <h3>{book.title}</h3>
          <p>Author: {book.authorName}</p>
          <p>Categories: {book.categories}</p>
          <p>Date Added: {book.addedDate}</p>
          <p>Updated Date: {book.updatedDate}</p>
          <p>Likes : {book.likes}</p>
          <p>Rating : {book.rating}</p>
        </div>
      </div>
      <div className="synopsis-section">
        <h3>Synopsis</h3>
        <p>{book.synopsis}</p>
      </div>
    </div>
  );
};

BookDetailsCard.propTypes = {
  book: PropTypes.object.isRequired,
};
