import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation-bar">
      <nav className="nav-bar">
        <Link to="/me">Profile</Link>
        <Link to="/home">Home</Link>
        <Link to="/inbox">Inbox</Link>
      </nav>
    </div>
  );
}
