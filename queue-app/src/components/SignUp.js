import React from "react";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-up__container"></div>
      <h3>Sign Up for OnlyFriends</h3>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <button>Sign Up</button>
    </div>
  );
}
