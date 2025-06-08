import React, { Component } from "react";

export class PlayerInfo extends Component {
  render() {
    const { mainPlayer } = this.props;
    return (
      <div className=" w-1/5 h-full flex flex-col justify-center ">
        <p className="text-xl font-semibold">{mainPlayer.playerName}</p>
        <p>
          Chip Bank:{" "}
          <span className="text-[#4d724d]">${mainPlayer.playerChip}</span>
        </p>
        <p>
          Round Bet:{" "}
          <span className="text-[#ca6161]">-${mainPlayer.playerRoundBet}</span>
        </p>
        <p>Status:{mainPlayer.playerStatus}</p>
        <p>Current Best Hand:</p>
        <p>Current Hand Rank:</p>
      </div>
    );
  }
}

export default PlayerInfo;
