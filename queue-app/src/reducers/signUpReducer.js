import { NEW_USER } from "../action-types/newUserActionType";

const userInitialState = {
  username: "",
  password: "",
  rePassword: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
};

const signUpReducer = (state = userInitialState, action) => {
  console.log(state);
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        rePassword: action.payload.rePassword,
        email: action.payload.email,
        firstName: action.payload.firstname,
        lastName: action.payload.lastname,
        phone: action.payload.phone,
      };

    default:
      return state;
  }
};

export default signUpReducer;
