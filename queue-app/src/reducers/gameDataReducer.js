import { VAL_CONTENT } from "../action-types/valorantActionTypes";

const initialState = [""];

const gameContent = (state = initialState, action) => {
  switch (action.type) {
    case VAL_CONTENT:
      return (state = action.payload);
    default:
      return state;
  }
};

export default gameContent;
