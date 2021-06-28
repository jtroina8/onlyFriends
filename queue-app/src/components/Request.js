import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function Requests() {
  return (
    <div className="request">
      <div className="request__window">
        <button class="cybr-btn">
          Post a Request<span aria-hidden></span>
          <span aria-hidden class="cybr-btn__glitch">
            Post a Request
          </span>
        </button>
        <div className="request__post">
          <p>Shrek#NA1</p>
          <p>Gold 3</p>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>My Swamp (US)</p>
          <FontAwesomeIcon icon={faMicrophoneSlash} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Donkey#NA1</p>
          <p>Diamond 2</p>
          <p>Sentinal</p>
          <p>Competitive</p>
          <p>East Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Fiona#NA1</p>
          <p>Bronze 1</p>
          <p>Initiator</p>
          <p>Unrated</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Lord Farquad#NA1</p>
          <p>Immortal</p>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>PussInBoots#NA1</p>
          <p>Iron 2</p>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Dragon#NA1</p>
          <p>Iron 1</p>
          <p>Controller</p>
          <p>Competitive</p>
          <p>Mid-West (US)</p>
          <FontAwesomeIcon icon={faMicrophoneSlash} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Wall Mirror#NA1</p>
          <p>Silver 3</p>
          <p>Sentinal</p>
          <p>Unrated</p>
          <p>Mid-West (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
      </div>
    </div>
  );
}
