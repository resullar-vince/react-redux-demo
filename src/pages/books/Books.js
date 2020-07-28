import React, { useEffect } from "react";
import { Spinner } from "../../components/common/Spinner";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import { CoverDetails } from "../../components/specific/books";
import PropTypes from "prop-types";

const Books = ({ isLoading, books, loadBooks, loadAuthors }) => {
  useEffect(() => {
    loadBooks().catch((error) => {
      alert("Loading books Failed", error);
    });

    loadAuthors().catch((error) => {
      alert("Loading Authors Failed", error);
    });
  }, [loadBooks, loadAuthors]);
  return (
    <div className="body-content">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>All Available Books</h1>
          <div className="shelf-card gainsboro-bg">
            {books.length > 0
              ? books.map((book) => <CoverDetails key={book.id} {...book} />)
              : null}
          </div>
        </>
      )}
    </div>
  );
};

function mapStateToProps(state) {
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
    authors: state.authors,
    isLoading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadAuthors: authorActions.loadAuthors,
  loadBooks: bookActions.loadBooks,
};

Books.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
