import { handleResponse, handleError } from "./apiUtils";
import * as apiConstants from "./apiConstants";
const baseUrl = apiConstants.MOCK_API_BASE_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
