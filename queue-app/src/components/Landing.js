import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SignUp from "./SignUp";
import { useState } from "react";
import SignUpSuccess from "./SignUpSuccess";
import OnlyFriends from "./assets/images/OnlyFriends.png";

export default function Landing() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  function submitSignUp() {
    setIsSubmit(true);
  }
  return (
    <section className="landing-page">
      {/* left side */}
      <div className="landing-left">
        <div className="landing-left__content"></div>
      </div>
      {/* end of left */}
      {/* right */}
      <div className="landing-right">
        <div className="landing-middle-content">
          <img src={OnlyFriends} alt="logo" />
          <Link to="/login">
            <button className="landing-log-in">Log In</button>
          </Link>
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
            {!isSubmit ? (
              <SignUp submitSignUp={submitSignUp} />
            ) : (
              <SignUpSuccess />
            )}
          </Modal>
          <div className="landing-motto">
            <h4 className="landing-motto__left">No drama.</h4>
            <h4 className="landing-motto__right">Only friends.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
