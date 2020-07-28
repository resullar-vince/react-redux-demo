import * as types from "./actionTypes";
import * as booksApi from "../../utilities/api/booksApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBooksSuccess(books) {
  return {
    type: types.LOAD_BOOKS_SUCCESS,
    books,
  };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return booksApi
      .getAllBooks()
      .then((books) => {
        dispatch(loadBooksSuccess(books));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function loadBookBySlug(slug) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return booksApi
      .getBookBySlug(slug)
      .then((books) => {
        dispatch({
          type: types.LOAD_BOOK_BY_SLUG_SUCCESS,
          books,
        });
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
