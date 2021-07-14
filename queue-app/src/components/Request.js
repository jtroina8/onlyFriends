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
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/14/smallicon.png"
            alt="gold 3"
          ></img>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>My Swamp (US)</p>
          <FontAwesomeIcon icon={faMicrophoneSlash} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Donkey#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/19/smallicon.png"
            alt="Diamond 2"
          ></img>
          <p>Sentinal</p>
          <p>Competitive</p>
          <p>East Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Fiona#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/6/smallicon.png"
            alt="Bronze 1"
          ></img>
          <p>Initiator</p>
          <p>Unrated</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Lord Farquad#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/23/smallicon.png"
            alt="Immortal"
          ></img>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>PussInBoots#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/24/smallicon.png"
            alt="Raident"
          ></img>
          <p>Duelist</p>
          <p>Competitive</p>
          <p>West Coast (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Dragon#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/20/smallicon.png"
            alt="Diamond 3"
          ></img>
          <p>Controller</p>
          <p>Competitive</p>
          <p>Mid-West (US)</p>
          <FontAwesomeIcon icon={faMicrophoneSlash} className="request__mic" />
        </div>
        <div className="request__post">
          <p>Wall Mirror#NA1</p>
          <img
            src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/smallicon.png"
            alt="Silver 3"
          ></img>
          <p>Sentinal</p>
          <p>Unrated</p>
          <p>Mid-West (US)</p>
          <FontAwesomeIcon icon={faMicrophone} className="request__mic" />
        </div>
      </div>
    </div>
  );
}
