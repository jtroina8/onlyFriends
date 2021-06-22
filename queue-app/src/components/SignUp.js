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

  const passwordValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== confirmPassword) {
      setPwError("Passwords do not match!");
    } else {
      setPwError("");
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container"></div>
      <h3>Sign Up for OnlyFriends</h3>
      <form 
        onSubmit={(e) => {
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
            "http://localhost:9000/users/register",
            requestOptions
          );
          history.push("/login")
      }}>
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
          onChange={(e) => passwordValidation(e)}
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
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submi">
          Sign Up
        </button>
      </form>
    </div>
  );
}
