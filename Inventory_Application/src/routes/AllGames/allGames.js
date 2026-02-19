import { Router } from 'express';
import { renderAllGames, renderIndividualGames } from '../../controllers/AllGames/allGames.js';
import { renderUpdatedGameForm, sendUpdatedGameForm} from '../../controllers/AllGames/updateGame.js';
import { DeleteGame } from '../../controllers/AllGames/deleteGame.js';

export const allGamesRouter = Router();

allGamesRouter.get("/", renderAllGames);
allGamesRouter.get("/:gameID", renderIndividualGames);
allGamesRouter.get("/:gameID/updateGame", renderUpdatedGameForm);
allGamesRouter.post("/:gameID", DeleteGame);
allGamesRouter.post("/:gameID/updateGame", sendUpdatedGameForm);
