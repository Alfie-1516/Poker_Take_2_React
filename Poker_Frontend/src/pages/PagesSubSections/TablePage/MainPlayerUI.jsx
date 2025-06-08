import React, { Component } from "react";
import Card from "../../../components/card";
import PlayerInfo from "./playerElements/PlayerInfo";
import PlayerCard from "./playerElements/PlayerCard";
import GameController from "../../../components/GameController";

export class MainPlayerUI extends Component {
  render() {
    const { mainPlayer } = this.props;
    return (
      <div className="h-[35%] w-full rounded-br-lg p-4 border-[#8db48e] bg-white flex border-2 border-t-0 border-l-0">
        <PlayerInfo mainPlayer={mainPlayer} />
        <div className="flex w-4/12 justify-evenly">
          <PlayerCard cardImage={mainPlayer.playerCard1} />
          <PlayerCard cardImage={mainPlayer.playerCard2} />
        </div>
        <GameController />
      </div>
    );
  }
}

export default MainPlayerUI;
