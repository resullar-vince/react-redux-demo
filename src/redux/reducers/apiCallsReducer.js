import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypesEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallsStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    state++;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypesEndsInSuccess(action.type)
  ) {
    state--;
  }

  return state;
}
