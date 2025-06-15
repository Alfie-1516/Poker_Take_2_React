import express from "express";
import { startGame } from "../controllers/gameController.js";
import { startBetting } from "../controllers/bettingController.js";
import { gameState } from "../controllers/stateController.js";
import { playerAction } from "../controllers/actionController.js";
const router = express.Router();

router.get("/startGame", startGame);
router.get("/startBetting", startBetting);
router.get("/gameState", gameState)
router.post("/playerAction", playerAction)

export default router;
