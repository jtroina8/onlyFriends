import React from "react";
import { Link } from "react-router-dom";
import OnlyFriends from "./assets/images/OnlyFriends.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="navigation-bar">
      <nav className="nav-bar">
        <Link to="/me">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/home">
          <img src={OnlyFriends} alt="" />
        </Link>
        <Link to="/inbox">
          <FontAwesomeIcon icon={faInbox} />
        </Link>
      </nav>
    </div>
  );
}
