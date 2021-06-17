import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing-page">
      {/* left side */}
      <div className="landing-left">
        <div className="landing-left__content">
          <div>
            <h1>Landing Page</h1>
            <h2>Page where you can click either Log In or Sign Up</h2>
            <p>
              Log In will take you to a seperate page, while Sign Up will be a
              pop up window.
            </p>
          </div>
        </div>
      </div>
      {/* end of left */}
      {/* right */}
      <div className="landing-right">
        <div className="landing-middle-content">
          <h1>Welcome to OnlyFriends!</h1>
          <Link to="/login">
            <button className="landing-log-in">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="landing-sign-up">Sign Up</button>
          </Link>
          <h4>You know you want to. ;)</h4>
        </div>
      </div>
    </section>
  );
}
