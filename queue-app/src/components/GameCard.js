import React from "react";
import { useSelector } from "react-redux";

export default function GameCard() {
  const gameInfo = useSelector((state) => state.gameContent);
  console.log(gameInfo);
  //   gameContent: Array(3)
  // 0:
  // assetObjectName: "Episode1_CompetitiveTierDataTable"
  // assetPath: "ShooterGame/Content/UI/Screens/Shared/Competitive/Episode1_CompetitiveTierDataTable"
  // tiers: Array(25)
  // 0: {tier: 0, tierName: "UNRANKED", division: "ECompetitiveDivision::UNRANKED", divisionName: "UNRANKED", color: "ffffffff", …}
  // 1: {tier: 1, tierName: "Unused1", division: "ECompetitiveDivision::INVALID", divisionName: "Unused1", color: "ffffffff", …}
  // 2: {tier: 2, tierName: "Unused2", division: "ECompetitiveDivision::INVALID", divisionName: "Unused2", color: "ffffffff", …}
  // 3: {tier: 3, tierName: "IRON 1", division: "ECompetitiveDivision::IRON", divisionName: "IRON", color: "131513ff", …}
  // 4:
  // color: "131513ff"
  // division: "ECompetitiveDivision::IRON"
  // divisionName: "IRON"
  // largeIcon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/4/largeicon.png"
  // rankTriangleDownIcon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/4/ranktriangledownicon.png"
  // rankTriangleUpIc
  return (
    <div className="val-card">
      {gameInfo.map((content) => (
        <div className="val-card__info">
          {content.tiers.map((tier) => {
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
          })}
          {/* <p>{content.role.displayName}</p> */}
        </div>
      ))}
      {/* <div className="val-card__user-info">
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

          <h4>Desired Rank: </h4>
          <div className="val-card__user-rank-desired">
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
          <div className="val-card__user-level">
            <h4>Level: </h4>
            <h3>Casual // Play for Fun</h3>
          </div>
        </div>
        <div className="val-card__user-comms">
          <img
            src="https://static.thenounproject.com/png/55394-200.png"
            alt="no-mic-symbol"
          />
        </div>
      </div>
      <div className="val-card__req-info">
        <h3>Looking for:</h3>
        <div className="val-card__req-rank">
          <h4>Rank: </h4>
          <div className="val-card__req-rank-symbol">
            <img
              src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/15/largeicon.png"
              alt="plat-1"
            />
            <h4>Platnium 1</h4>
          </div>
          <h4>Desired Rank: </h4>
          <div className="val-card__req-rank-desired">
            <img
              src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/18/largeicon.png"
              alt="diamond-1"
            />
            <h4>Platnium 3</h4>
          </div>
        </div>
        <div className="val-card__req-characters">
          <h4>Mains: </h4>
          <img
            src="https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png"
            alt="killjoy-pic"
          />
          <img
            src="https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png"
            alt="sage-pic"
          />
          <img
            src="https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png"
            alt="cypher-pic"
          />
        </div>
        <div className="val-card__req-role">
          <h4>Perferred Role: </h4>
          <h3>Sentinal</h3>
        </div>
        <div className="val-card__req-server">
          <h4>Server: </h4>
          <h3>East Coast (US)</h3>
        </div>
        <div className="val-card__req-level">
          <h4>Level: </h4>
          <h3>Casual // Play for Fun</h3>
        </div>
        <div className="val-card__req-comms">
          <img
            src="https://static.thenounproject.com/png/55394-200.png"
            alt="no-mic-symbol"
          />
        </div>
      </div> */}
    </div>
  );
}
