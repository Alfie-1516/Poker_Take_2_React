import {
  getCurrentGameState,
  setCurrentGameState,
} from "../utils/stateManager.js";

export const playerAction = (req, res) => {
  const { action } = req.body;
  console.log(action);
  let currentState = getCurrentGameState();
  currentState.previousAction = action;
  setCurrentGameState(currentState);
  res.json({ message: `Received action: ${action}` });
};
