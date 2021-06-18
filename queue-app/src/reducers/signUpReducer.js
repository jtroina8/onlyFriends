import { NEW_USER } from "../action-types/newUserActionType";

const userInitialState = {
  username: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
};

const signUpReducer = (state = userInitialState, action) => {
  console.log(state);
  switch (action.type) {
    case NEW_USER:
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export default signUpReducer;
