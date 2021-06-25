import React from "react";
import val_boxart from "./assets/images/games/val_boxart.jpeg";
import lol_boxart from "./assets/images/games/lol_boxart.jpeg";
import apex_boxart from "./assets/images/games/apex_boxart.jpeg";
import csgo_boxart from "./assets/images/games/csgo_boxart.jpeg";
import ow_boxart from "./assets/images/games/ow_boxart.jpeg";
import warzone_boxart from "./assets/images/games/warzone_boxart.jpeg";
import fifa_boxart from "./assets/images/games/fifa_boxart.jpeg";
import ssbu_boxart from "./assets/images/games/ssbu_boxart.jpeg";
import nba2k_boxart from "./assets/images/games/nba2k_boxart.jpeg";
import des2_boxart from "./assets/images/games/des2_boxart.jpeg";
import tarkov_boxart from "./assets/images/games/tarkov_boxart.jpeg";
import doom2_boxart from "./assets/images/games/doom2_boxart.jpeg";
import division_boxart from "./assets/images/games/division_boxart.jpeg";
import minecraft_boxart from "./assets/images/games/minecraft_boxart.jpeg";
import gtav_boxart from "./assets/images/games/gtav_boxart.jpeg";
import dota2_boxart from "./assets/images/games/dota2_boxart.jpeg";
import fortnite_boxart from "./assets/images/games/fortnite_boxart.png";
import wow_boxart from "./assets/images/games/wow_boxart.jpeg";
import dbd_boxart from "./assets/images/games/dbd_boxart.jpeg";
import KOcity_boxart from "./assets/images/games/KOcity_boxart.jpeg";
import RL_boxart from "./assets/images/games/RL_boxart.jpeg";

export default function GamingBar({ setGame }) {
  return (
    <div>
      <div className="game-bar">
        <img
          className="val_boxart"
          src={val_boxart}
          alt=""
          onClick={() => console.log("yo what up")}
        />
        <img className="lol_boxart" src={lol_boxart} alt="" />
        <img className="apex_boxart" src={apex_boxart} alt="" />
        <img className="csgo_boxart" src={csgo_boxart} alt="" />
        <img className="ow_boxart" src={ow_boxart} alt="" />
        <img className="warzone_boxart" src={warzone_boxart} alt="" />
        <img className="fortnite_boxart" src={fortnite_boxart} alt="" />
        <img className="fifa_boxart" src={fifa_boxart} alt="" />
        <img className="ssbu_boxart" src={ssbu_boxart} alt="" />
        <img className="wow_boxart" src={wow_boxart} alt="" />
        <img className="RL_boxart" src={RL_boxart} alt="" />
        <img className="nba2k_boxart" src={nba2k_boxart} alt="" />
        <img className="des2_boxart" src={des2_boxart} alt="" />
        <img className="tarkov_boxart" src={tarkov_boxart} alt="" />
        <img className="doom2_boxart" src={doom2_boxart} alt="" />
        <img className="division_boxart" src={division_boxart} alt="" />
        <img className="dbd_boxart" src={dbd_boxart} alt="" />
        <img className="minecraft_boxart" src={minecraft_boxart} alt="" />
        <img className="gtav_boxart" src={gtav_boxart} alt="" />
        <img className="dota2_boxart" src={dota2_boxart} alt="" />
        <img className="KOcity_boxart" src={KOcity_boxart} alt="" />
      </div>
      <div className="game-cards"></div>
    </div>
  );
}
