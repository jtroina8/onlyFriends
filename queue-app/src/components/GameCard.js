import React from "react";
import { useSelector } from "react-redux";

export default function GameCard() {
  const gameInfo = useSelector((state) => state.gameContent);
  console.log(gameInfo);
  return (
    <div className="val-card">
      {gameInfo.map((content) => (
        <div className="val-card__info">
          {/* {content.tiers.map((tier) => {
            return (
              <>
                <img
                  src={tier.largeIcon}
                  alt={
                    tier.largeIcon ? `tier ${tier.divisionName} ` : "No Icon"
                  }
                />
                <p>{tier.divisionName}</p>
              </>
            );
          })} */}
          {/* <p>{content.role.displayName}</p> */}
        </div>
      ))}
      <div className="val-card__user-info">
        <h3>@shrek's info:</h3>
        <div className="val-card__user-rank">
          <h4>Rank: </h4>
          <div className="val-card__user-rank-symbol">
            <img
              src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png"
              alt="gold-2"
            />
            <h4>Gold 2</h4>
          </div>

          <h4>Peak Rank: </h4>
          <div className="val-card__user-peak-rank">
            <img
              src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/17/largeicon.png"
              alt="plat-3"
            />
            <h4>Platnium 3</h4>
          </div>
        </div>
        <div className="val-card__user-characters">
          <h4>Mains: </h4>
          <img
            src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"
            alt="jett-pic"
          />
          <img
            src="https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png"
            alt="phoenix-pic"
          />
          <img
            src="https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png"
            alt="reyna-pic"
          />
        </div>
        <div className="val-card__user-words">
          <div className="val-card__user-role">
            <h4>Perferred Role: </h4>
            <h3>Duelist</h3>
          </div>
          <div className="val-card__user-server">
            <h4>Server: </h4>
            <h3>East Coast (US)</h3>
          </div>
          <div className="val-card__user-mode">
            <h4>Mode: </h4>
            <h3>Unrated</h3>
          </div>
        </div>
        <div className="val-card__user-comms">
          <img
            src="https://static.thenounproject.com/png/55394-200.png"
            alt="no-mic-symbol"
          />
        </div>
      </div>
    </div>
  );
}
