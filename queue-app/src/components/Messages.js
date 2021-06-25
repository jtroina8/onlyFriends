import React from "react";

export default function Messages() {
  return (
    <div className="message">
      <div className="message__window">
        <h1>Message Window</h1>
        <input
          placeholder="Write your message here..."
          className="message__input"
        ></input>
      </div>
    </div>
  );
}
