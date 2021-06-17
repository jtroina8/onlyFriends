const userInitialState = {
  username: [],
  password: [],
  email: [],
  firstName: [],
  lastName: [],
  phone: [],
};

const signUpReducer = (state = userInitialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, username: [...state.username, action.payload] };

    default:
      return state;
  }
};

export default signUpReducer;
