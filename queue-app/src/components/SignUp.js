import React from "react";
import useForm from "./SignUpForm";
import validate from "./ValidateInfo";
// import { useDispatch } from "react-redux";
// import { setUser } from "../actions/newUserActions";
// import { useHistory } from "react-router-dom";

export default function SignUp({ submitSignUp }) {
  const { handleChange, userInfo, handleSubmit, errors } = useForm(
    submitSignUp,
    validate
  );

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <h2>Sign Up for OnlyFriends</h2>
        <form onSubmit={handleSubmit}>
          <div className="sign-up__input-container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userInfo.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userInfo.confimPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userInfo.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userInfo.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone (3335554444)"
              value={userInfo.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            <button type="submit" className="sign-up__btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
