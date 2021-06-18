import { NEW_USER } from "../action-types/newUserActionType";

export const setUser = (dispatch, newUser) => {
  return dispatch({ type: NEW_USER, payload: newUser });
};
