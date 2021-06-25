import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchVALORANT from "../actions/valorantDataActions";

export default function GameCard() {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.gameContent);
  useEffect(() => {
    fetchVALORANT(dispatch);
  }, [dispatch]);

  return (
    <div className="example-card">
      <div className="val-card">
        <div className="val-card__info"></div>
        <div className="val-card__user-info">
          <h3>@shrek's info:</h3>
          <div className="val-card__user-rank">
            <h4>Rank: </h4>
            <div className="val-card__user-rank-symbol">
              <img
                src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png"
                alt="gold-2"
              />
            </div>
            <h4>Peak Rank: </h4>
            <div className="val-card__user-peak-rank">
              <img
                src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/17/largeicon.png"
                alt="plat-3"
              />
            </div>
          </div>
          <div className="val-card__user-characters">
            <h4>Mains: </h4>
            <img
              src={gameData === [""] ? "" : gameData[0].displayIconSmall}
              alt="jett-pic"
            />
            <img
              src={gameData === [""] ? "" : gameData[0].displayIconSmall}
              alt="phoenix-pic"
            />
            <img
              src={gameData === [""] ? "" : gameData[0].displayIconSmall}
              alt="reyna-pic"
            />
          </div>
          {/* <div className="val-card__user-words">
            <div className="val-card__user-role">
              <h4>Role: </h4>
              <h3>{gameData === [""] ? "" : gameData[0].role.displayName}</h3>
            </div>
          </div> */}
          <div className="val-card__user-comms">
            <img
              src="https://static.thenounproject.com/png/55394-200.png"
              alt="no-mic-symbol"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
