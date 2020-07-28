import React, { useEffect, useState } from "react";
import { Spinner } from "../../components/common/Spinner";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import { BookDetailsCard } from "../../components/specific/books";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Details = ({
  books,
  loadAuthors,
  loadBookBySlug,
  slug,
  isLoading = true,
}) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // Call API for to get Book Details
    loadBookBySlug(slug).catch((error) => {
      setRedirect(true);
      console.error("Loading Book Failed: ", error);
    });

    loadAuthors().catch((error) => {
      console.error("Loading Authors Failed: ", error);
    });
  }, [slug, loadBookBySlug, loadAuthors]);

  return (
    <div className="body-content">
      {isLoading || books.length === 0 ? (
        redirect ? (
          <Redirect to="/page-not-found/" />
        ) : (
          <Spinner />
        )
      ) : (
        <>
          <h1>View Details</h1>
          <BookDetailsCard book={books[0]} />
        </>
      )}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  return {
    books:
      state.authors.length === 0
        ? []
        : state.books.map((book) => {
            return {
              ...book,
              authorName: state.authors.find((a) => a.id === book.authorId)
                .name,
            };
          }),
    slug,
    authors: state.authors,
    isLoading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadBookBySlug: bookActions.loadBookBySlug,
  loadAuthors: authorActions.loadAuthors,
};

Details.propTypes = {
  books: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadBookBySlug: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
