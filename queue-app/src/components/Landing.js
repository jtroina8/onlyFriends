import React from "react";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <h1>Landing Page</h1>
        <h2>Page where you can click either Log In or Sign Up</h2>
        <p>
          Log In will take you to a seperate page, while Sign Up will be a pop
          up window.
        </p>
      </div>
      <div className="landing-buttons">
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
