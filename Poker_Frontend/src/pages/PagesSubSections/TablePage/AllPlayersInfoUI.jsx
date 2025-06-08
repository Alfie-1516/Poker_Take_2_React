import React, { Component } from "react";
import Card from "../../../components/card";

export class AllPlayersInfoUI extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div className="h-1/5 flex pt-2 pb-2 justify-between ">
        <div className=" w-2/5 h-full">
          <p className="text-xl font-semibold">{playerInfo.playerName}</p>
          <p>
            Chip Bank:{" "}
            <span className="text-[#4d724d]">${playerInfo.playerChip}</span>
          </p>
          <p>
            Round Bet:{" "}
            <span className="text-[#ca6161]">
              -${playerInfo.playerRoundBet}
            </span>
          </p>
          <p>Status:{playerInfo.playerStatus}</p>
        </div>
        <div className=" w-3/5 h-full flex justify-evenly">
          <Card cardImage={playerInfo.playerCard1} />
          <Card cardImage={playerInfo.playerCard2} />
        </div>
      </div>
    );
  }
}

export default AllPlayersInfoUI;
