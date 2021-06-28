import React from "react";
import postPic from "./assets/images/post-pic.png";

export default function Messages() {
  return (
    <div className="message">
      <div className="message__window">
        <div className="message__title">
          <h1>Viewing VALORANT</h1>
        </div>
        <div className="message__post">
          <img
            src="https://i.imgflip.com/pdrzb.jpg"
            alt="donkey pic"
            className="message__user-pic"
          ></img>
          <p>
            There's nothing I love more than playing some VALORANT after making
            some WAFFLES!! Has anyone tried the new agent yet? I might be a
            KAY-O MAIN!!
          </p>
          <img src={postPic} alt="post pic" className="message__post-pic"></img>
        </div>
      </div>
    </div>
  );
}
