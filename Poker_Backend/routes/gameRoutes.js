import express from "express";
import { startGame } from "../controllers/gameController.js";
import { startBetting } from "../controllers/bettingController.js";
const router = express.Router();

router.get("/startGame", startGame);
router.get("/startBetting", startBetting);

export default router;
