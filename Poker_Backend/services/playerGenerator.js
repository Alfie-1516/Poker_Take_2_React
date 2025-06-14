import { dealCard } from "../utils/dealCard.js";
export function createPlayers(deck) {
  const players = [
    {
      id: 1,
      name: "Player 1",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 2,
      name: "Player 2",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 3,
      name: "Player 3",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 4,
      name: "Player 4",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 5,
      name: "Player 5",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
    {
      id: 6,
      name: "Player 6",
      hand: [],
      chips: 1000,
      bet: 0,
      timesPlayed: 0,
      fold: false,
      allIn: false,
      out: false,
    },
  ];
  for (let i = 0; i < 2; i++) {
    players.forEach((player) => player.hand.push(dealCard(deck)));
  }
  return players;
}
