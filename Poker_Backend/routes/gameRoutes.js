import express from 'express';
import gameController from '../controllers/gameController.js'; // Adjust the path as necessary
const router = express.Router();

router.post('/start', gameController.startGame);

export default router;