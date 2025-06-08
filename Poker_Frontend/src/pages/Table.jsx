import React, { Component } from "react";
import MainPlayerUI from "./PagesSubSections/TablePage/mainPlayerUI";
import MainTable from "./PagesSubSections/TablePage/mainTable";
import AllPlayersUI from "./PagesSubSections/TablePage/allPlayersUI";

export class Table extends Component {
  render() {
    let players = [
      {
        playerName: "Player 2",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
      {
        playerName: "Player 3",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
      {
        playerName: "Player 4",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
      {
        playerName: "Player 5",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
      {
        playerName: "Player 6",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
    ];
    let mainPlayer = [
      {
        playerName: "Player 1",
        playerChip: 2000,
        playerRoundBet: 50,
        playerStatus: "Active",
        playerCard1: "2_of_clubs",
        playerCard2: "2_of_diamonds",
      },
    ];
    return (
      <div className="p-4  h-[90vh] w-screen ">
        <main className=" h-full w-full flex ">
          <AllPlayersUI players={players} />
          <div className="w-3/4 h-full ">
            <MainTable />
            <MainPlayerUI mainPlayer={mainPlayer[0]} />
          </div>
        </main>
      </div>
    );
  }
}

export default Table;
