import React, { useEffect, useState } from "react";
import OnlyFriends from "./assets/images/OnlyFriends.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LogIn() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="log-in">
      <div className="log-in__container">
        <img src={OnlyFriends} alt="" />
        <h1>Log In to OnlyFriends</h1>
        <div className="log-in__input-container">
          <form
            onSubmit={(e) => {
              const loginRequest = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  password: password,
                  userName: userName,
                }),
              };
              const response = fetch(
                "http://localhost:9000/users/login",
                loginRequest
              );
              history.push("/home");
            }}
          >
            <input
              type="text"
              placeholder="Username, Phone, or Email"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="log-in__btn">
              Log In
            </button>
            <Link to="/signup">
              <button className="log-in__sign-up-btn">Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
