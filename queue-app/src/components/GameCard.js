import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchVALORANT from "../actions/valorantDataActions";
import valReyna from "./assets/images/characters/valReyna.png";
import valPhoenix from "./assets/images/characters/valPhoenix.png";

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
          <h2>VALORANT:</h2>
          <div className="val-card__user-rank">
            <h4>Rank: </h4>
            <div className="val-card__user-rank-symbol">
              <img
                src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png"
                alt="gold-2"
              />
            </div>
            <h4>Peak: </h4>
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
              alt="breach-pic"
            />
            <img src={valPhoenix} alt="phoenix-pic" />
            <img src={valReyna} alt="reyna-pic" />
          </div>
          <div className="val-card__user-words">
            <div className="val-card__user-stats">
              <div className="val-card__user-wr">
                <h4>Win Rate: </h4>
                <h1> 55.3%</h1>
              </div>
              <div className="val-card__user-weapon">
                <h4>Weapon of Choice:</h4>
                <h1>Vandal</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="val-card">
        <div className="val-card__info"></div>
        <div className="val-card__user-info">
          <h2>VALORANT:</h2>
          <div className="val-card__user-rank">
            <h4>Rank: </h4>
            <div className="val-card__user-rank-symbol">
              <img
                src="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png"
                alt="gold-2"
              />
            </div>
            <h4>Peak: </h4>
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
              alt="breach-pic"
            />
            <img src={valPhoenix} alt="phoenix-pic" />
            <img src={valReyna} alt="reyna-pic" />
          </div>
          <div className="val-card__user-words">
            <div className="val-card__user-stats">
              <div className="val-card__user-wr">
                <h4>Win Rate: </h4>
                <h1> 55.3%</h1>
              </div>
              <div className="val-card__user-weapon">
                <h4>Weapon of Choice:</h4>
                <h1>Vandal</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
