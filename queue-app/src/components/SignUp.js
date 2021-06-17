import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.signUpReducer);
  return (
    <div className="sign-up">
      <div className="sign-up__container"></div>
      <h3>Sign Up for OnlyFriends</h3>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => e.target.value}
      />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone" />
      <button
        onClick={(e) =>
          dispatch({ type: "ADD_USERNAME", payload: e.target.value })
        }
      >
        Sign Up
      </button>
    </div>
  );
}
