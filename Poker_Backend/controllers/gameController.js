import { generateDeck } from "../services/deckGenerator.js";
import { createPlayers } from "../services/playerGenerator.js";

export const startGame = (req, res) => {
  const deck = generateDeck();
  const players = createPlayers(deck);
  res
    .status(200)
    .json({
      message: "Game started",
      allPlayers: players,
    });
};
