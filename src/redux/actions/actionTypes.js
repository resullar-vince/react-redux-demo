//General
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";

//Books
export const LOAD_BOOKS_SUCCESS = "LOAD_BOOKS_SUCCESS";
export const LOAD_BOOK_BY_SLUG_SUCCESS = "LOAD_BOOK_BY_SLUG_SUCCESS";
export const ADD_BOOK_SUCCESS = "ADD_BOOKS_SUCCESS";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const REMOVE_BOOK_SUCCESS = "REMOVE_BOOK_SUCCESS";

//This is an optimistic delete so we should emphasize that this will update UI immediately even though actual api call is still in progress.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
