import React from "react";
import OnlyFriends from "./assets/images/OnlyFriends.png";

export default function LogIn() {
  return (
    <div className="log-in">
      <div className="log-in__container">
        <img src={OnlyFriends} alt="" />
        <h1>Log In to OnlyFriends</h1>
        <div className="log-in__input-container">
          <input type="text" placeholder="Username, Phone, or Email" />
          <input type="password" placeholder="Password" />
          <button className="log-in__btn">Log In</button>
        </div>
      </div>
    </div>
  );
}
