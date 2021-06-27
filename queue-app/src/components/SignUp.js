import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/newUserActions";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [eMail, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [pwError, setPwError] = useState("");
  const history = useHistory();

  useEffect(() => {}, []);

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <h2>Sign Up for OnlyFriends</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: eMail,
                password: password,
                userName: userName,
                phoneNumber: phone,
              }),
            };
            const response = fetch("/users/register", requestOptions);
            if (password !== confirmPassword) {
              setPwError("Passwords do not match!");
              alert("Passwords do not match!");
            } else {
              history.push("/login");
            }
          }}
        >
          <div className="sign-up__input-container">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone (3335554444)"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="sign-up__btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
