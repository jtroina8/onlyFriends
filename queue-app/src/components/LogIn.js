import React from "react";

export default function LogIn() {
  return (
    <div className="log-in">
      <div className="log-in__container">
        <h3>Log In to OnlyFriends</h3>
        <input type="text" placeholder="Username, Phone, or Email" />
        <input type="text" placeholder="Password" />
        <button>Log In</button>
      </div>
    </div>
  );
}
