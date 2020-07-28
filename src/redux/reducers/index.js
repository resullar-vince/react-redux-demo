import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import books from "./booksReducer";
import apiCallsInProgress from "./apiCallsReducer";

const rootReducer = combineReducers({
  books,
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
