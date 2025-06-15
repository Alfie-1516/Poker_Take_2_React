// gameState.js
export let gameState = {
  players: [],
  pot: 0,
  currentTurn: 0,
  previousAction: "No Moves Made",
  communityCards: [],
  round: "Pre-Flop",
  gameOver: false,
  winner: null,
};

export function getCurrentGameState() {
  return gameState;
}

export function setCurrentGameState(newState) {
  gameState = { ...gameState, ...newState }; // Merge updates
}
