import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnlyFriends from "./assets/images/OnlyFriends.png";
// import { useHistory } from "react-router-dom";
// import { setUser } from "../actions/newUserActions";
// import { useDispatch } from "react-redux";
import Modal from "react-modal";
import SignUp from "./SignUp";
import SignUpSuccess from "./SignUpSuccess";

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  function submitSignUp() {
    setIsSubmit(true);
  }

  return (
    <div className="log-in__bg">
      <div className="log-in">
        <div className="log-in__container">
          <Link to="/">
            <img src={OnlyFriends} alt="" />
          </Link>
          <h1>Log In to OnlyFriends</h1>
          <div className="log-in__input-container">
            <form>
              <input
                type="text"
                placeholder="Please Enter 'Shrek' as Username"
              />
              <input type="password" placeholder="Password is 'myswamp123" />
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
                {/* <SignUp /> */}
                {!isSubmit ? (
                  <SignUp submitSignUp={submitSignUp} />
                ) : (
                  <SignUpSuccess />
                )}
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
