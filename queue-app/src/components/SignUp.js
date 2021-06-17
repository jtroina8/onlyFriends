import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/newUserActions";

export default function SignUp() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [rePassword, setPassWord] = useState("");
  const [eMail, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="sign-up">
      <div className="sign-up__container"></div>
      <h3>Sign Up for OnlyFriends</h3>
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
        onChange={(e) => setPassWord(e.target.value)}
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
      <button
        onClick={(e) => {
          const newUser = {
            username: userName,
            password: passWord,
            rePassword: rePassword,
            email: eMail,
            firstname: firstName,
            lastname: lastName,
            phone: phone,
          };
          setUser(dispatch, newUser);
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
