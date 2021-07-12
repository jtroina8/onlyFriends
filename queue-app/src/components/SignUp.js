import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
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

  let history = useHistory();
  const routeToLogin = () => {
    let path = <Link to="/login" />;
    history.push(path);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     routeToLogin();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

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
              className="sign-up__input-container-username"
              value={userInfo.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="sign-up__errors-username">
                {errors.username}
              </span>
            )}
            <input
              type="password"
              name="password"
              className="sign-up__input-container-left"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="sign-up__errors-left">{errors.password}</span>
            )}
            <input
              type="password"
              name="confirmPassword"
              className="sign-up__input-container-right"
              placeholder="Confirm Password"
              value={userInfo.confimPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="sign-up__errors-right">
                {errors.confirmPassword}
              </span>
            )}
            <input
              type="text"
              name="firstName"
              className="sign-up__input-container-left"
              placeholder="First Name"
              value={userInfo.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="sign-up__errors-left">{errors.firstName}</span>
            )}
            <input
              type="text"
              name="lastName"
              className="sign-up__input-container-right"
              placeholder="Last Name"
              value={userInfo.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="sign-up__errors-right">{errors.lastName}</span>
            )}
            <input
              type="email"
              name="email"
              className="sign-up__input-container-left"
              placeholder="Email"
              value={userInfo.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="sign-up__errors-left">{errors.email}</span>
            )}
            <input
              type="tel"
              name="phoneNumber"
              className="sign-up__input-container-right"
              placeholder="Phone (3335554444)"
              value={userInfo.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="sign-up__errors-right">
                {errors.phoneNumber}
              </span>
            )}
            <button
              type="submit"
              className="sign-up__btn"
              onClick={routeToLogin}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
