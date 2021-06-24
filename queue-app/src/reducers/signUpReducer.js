import { NEW_USER } from "../action-types/newUserActionType";

const userInitialState = null;

const signUpReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.payload;
    default:
      return state;
  }
};

export default signUpReducer;
