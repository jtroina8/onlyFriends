import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnlyFriends from "./assets/images/OnlyFriends.png";
import { useHistory } from "react-router-dom";
import { setUser } from "../actions/newUserActions";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import SignUp from "./SignUp";

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  async function loginUser(credentials) {
    return fetch("/users/login", {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("User logged in successfully");
          setUser(dispatch, data);
        }
      });
  }

  const history = useHistory();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    if (token !== null) {
      history.push("./home");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="log-in__bg">
      <div className="log-in">
        <div className="log-in__container">
          <Link to="/">
            <img src={OnlyFriends} alt="" />
          </Link>
          <h1>Log In to OnlyFriends</h1>
          <div className="log-in__input-container">
            <form onSubmit={handleSubmit}>
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
              <button
                className="landing-sign-up"
                onClick={() => setIsOpen(!modalIsOpen)}
              >
                Sign Up
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                className="Modal"
              >
                <SignUp />
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
