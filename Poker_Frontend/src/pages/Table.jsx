import React, { Component, useEffect, useState } from "react";
import MainPlayerUI from "./PagesSubSections/TablePage/mainPlayerUI";
import MainTable from "./PagesSubSections/TablePage/MainTable";
import AllPlayersUI from "./PagesSubSections/TablePage/allPlayersUI";
import GameController from "./PagesSubSections/TablePage/GameController";

export function Table() {
  const [players, setTempPlayers] = useState([
    {
      id: 1,
      name: "Alice",
      hand: [],
      chips: 1500,
      bet: 10,
      timesPlayed: 5,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 2,
      name: "Bob",
      hand: [],
      chips: 1200,
      bet: 20,
      timesPlayed: 3,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 3,
      name: "Charlie",
      hand: [],
      chips: 800,
      bet: 0,
      timesPlayed: 7,
      fold: true,
      allIn: false,
      out: false,
    },
    {
      id: 4,
      name: "Diana",
      hand: [],
      chips: 2000,
      bet: 50,
      timesPlayed: 2,
      fold: false,
      allIn: true,
      out: false,
    },
    {
      id: 5,
      name: "Ethan",
      hand: [],
      chips: 500,
      bet: 0,
      timesPlayed: 10,
      fold: false,
      allIn: false,
      out: true,
    },
    {
      id: 6,
      name: "Fiona",
      hand: [],
      chips: 1750,
      bet: 30,
      timesPlayed: 4,
      fold: false,
      allIn: false,
      out: false,
    },
  ]);

  // You can now export or use altPlayers as needed);
  // useEffect(() => {
  //   console.log("this is the players", players);
  // }, [temp_players]);
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
          <div className="flex">
            <MainPlayerUI mainPlayer={mainPlayer[0]} />
            <GameController setTempPlayers={setTempPlayers} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Table;
