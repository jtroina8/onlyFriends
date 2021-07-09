import React from "react";
import { Link } from "react-router-dom";
import OnlyFriends from "./assets/images/OnlyFriends.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="navigation-bar">
      <nav className="nav-bar">
        <Link to="/me">
          <img
            src="https://i.insider.com/60817ec5354dde0018c06960?width=700"
            alt=""
            className="nav__profile"
          />
        </Link>
        <Link to="/home">
          <img src={OnlyFriends} alt="" className="nav__logo" />
        </Link>
        <Link to="/inbox">
          <FontAwesomeIcon icon={faInbox} />
        </Link>
      </nav>
    </div>
  );
}
