import React, { useEffect } from "react";
import { CoverCarousel } from "../components/specific/books";
import { Spinner } from "../components/common/Spinner";
import * as authorActions from "../redux/actions/authorActions";
import * as bookActions from "../redux/actions/bookActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ books, loadAuthors, loadBooks, isLoading = true }) => {
  useEffect(() => {
    loadBooks().catch((error) => {
      alert("Loading bookss Failed", error);
    });

    loadAuthors().catch((error) => {
      alert("Loading Authors Failed", error);
    });
    // eslint-disable-next-line
  }, [loadAuthors, loadBooks]);

  return (
    <div className="body-content">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="card-bb gainsboro-bg">
            <h1>Welcome to Bookbox</h1>
            <p>Browse popular books available in site.</p>
            <Link to="about" className="btn btn-primary btn-lg">
              Learn more
            </Link>
          </div>
          <div className="card-bb electromagnet-bg">
            {books.length > 0 ? (
              <CoverCarousel
                books={books}
                title="Random Books"
                linkSlug="random"
              />
            ) : null}
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
  loadBooks: bookActions.loadBooks,
  loadAuthors: authorActions.loadAuthors,
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
