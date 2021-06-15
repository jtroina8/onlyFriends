import React from "react";
import fetchVALORANT from "../actions/valorantDataActions";
import { useDispatch, useSelector } from "react-redux";

export default function GamingBar({ setGame }) {
  const dispatch = useDispatch();
  const valData = useSelector((state) => state.valorantDataReducer);
  console.log(valData);
  return (
    <div>
      <div className="game-bar">
        <img
          onClick={() => fetchVALORANT(dispatch, setGame)}
          className="val_boxart"
          src="https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_valorant_300x400.jpg"
          alt=""
        />
        <img
          className="lol_boxart"
          src="https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_league_of_legends_300x400.jpg"
          alt=""
        />
        <img
          className="apex_boxart"
          src="https://www.mobygames.com/images/covers/l/538006-apex-legends-xbox-one-front-cover.jpg"
          alt=""
        />
        <img
          className="csgo_boxart"
          src="https://www.gamespot.com/a/uploads/scale_medium/mig/7/2/0/5/2227205-i2cs9uzmq4yua.jpg"
          alt=""
        />
        <img
          className="ow_boxart"
          src="https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
          alt=""
        />
        <img
          className="warzone_boxart"
          src="https://howlongtobeat.com/games/75852_Call_of_Duty_Warzone.jpg"
          alt=""
        />
        <img
          className="fifa_boxart"
          src="https://sm.ign.com/ign_in/screenshot/default/ediffc5xkacogex_czd1.jpg"
          alt=""
        />
        <img
          className="nba2k_boxart"
          src="https://hoopshype.com/wp-content/uploads/sites/92/2020/07/damian-lillard-2k21-a.jpg?w=794"
          alt=""
        />
        <img
          className="ssbu_boxart"
          src="https://wbpl.org/wp-content/uploads/2018/12/Super-Smash-Bros-Ultimate-Box-Art.jpg"
          alt=""
        />
        <img
          className="des2_boxart"
          src="https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_destiny_2_300x400.jpg"
          alt=""
        />
      </div>
      <div className="game-cards">{}</div>
    </div>
  );
}
