import { handleResponse, handleError } from "./apiUtils";
import * as apiConstants from "./apiConstants";
const baseUrl = apiConstants.MOCK_API_BASE_URL + "/books/";

export function getAllBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getBookBySlug(slug) {
  return fetch(baseUrl + `?slug=${slug}`)
    .then(handleResponse)
    .then((data) => {
      if (data.length === 0) {
        handleError("Book title slug is not found.");
      } else {
        return data;
      }
    })
    .catch(handleError);
}
