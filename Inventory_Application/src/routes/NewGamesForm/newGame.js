import { Router } from 'express';
import { renderNewGameForm, sendNewGameForm } from '../../controllers/NewGamesForm/newGame.js';

export const newGameRouter = Router();

newGameRouter.get("/", renderNewGameForm);
newGameRouter.post("/", sendNewGameForm);
