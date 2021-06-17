import React from "react";
import { Link } from "react-router-dom";
import OnlyFriends from "./assets/images/OnlyFriends.png";

export default function Nav() {
  return (
    <div className="navigation-bar">
      <nav className="nav-bar">
        <Link to="/me">Profile</Link>
        <Link to="/home">
          <img src={OnlyFriends} alt="" height="100" width="200" />
        </Link>
        <Link to="/inbox">Inbox</Link>
      </nav>
    </div>
  );
}
