import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function booksReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOK_BY_SLUG_SUCCESS:
      return action.books;
    case types.ADD_BOOK_SUCCESS:
      return [...state, { ...action.books }];
    case types.UPDATE_BOOK_SUCCESS:
      return state.map((books) =>
        books.id === action.books.id ? action.books : books
      );
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
