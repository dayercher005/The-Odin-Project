import { body, validationResult, matchedData } from 'express-validator';
import { GettingCategories, GettingAllGameNames, UpdateGame, getIndividualGameDetails } from '../../db/Queries/queries.js';
import { navbarElements } from '../navbar.js';

export async function renderUpdatedGameForm(request, response){
    const GameCategories = await GettingCategories();
    const GameNames = await GettingAllGameNames();

    const gameID = request.params.gameID;
    const game = await getIndividualGameDetails(Number(gameID));

    response.locals.id = game[0].id
    response.locals.navbarElements = navbarElements;
    response.locals.AllGameNames = GameNames;
    response.locals.AvailableCategories = GameCategories;
    response.render("AllGamesPage/updateGame");
} 


const validateUpdatedGame = [
    body("updatedName")
    .trim()
    .notEmpty()
    .withMessage("Name of Game cannot be empty"),
    body("updatedPrice")
    .trim()
    .notEmpty()
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00"),
    body("updateCategoryChoice")
]


export const sendUpdatedGameForm = [
    validateUpdatedGame, 
    async (request, response) => {

        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("partials/errors", {
                errors: errors.array()
            })
        }

        const {updatedName, updatedPrice, updateCategoryChoice} = matchedData(request);

        await UpdateGame(updatedName, updatedPrice, updateCategoryChoice, request.params.gameID);
        response.redirect("/allGames");
    }   

]