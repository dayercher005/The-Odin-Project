import { body, validationResult, matchedData } from 'express-validator';
import { AddingNewGame, GettingCategories } from '../../db/Queries/queries.js';
import { navbarElements } from '../navbar.js';


export async function renderNewGameForm(request, response) {
    const GameCategories = await GettingCategories();
    response.locals.navbarElements = navbarElements;
    response.locals.AvailableCategories = GameCategories;
    response.render("NewGamePage/newGame");
}


const validateNewGame = [
    body("newName")
    .trim()
    .notEmpty()
    .withMessage("Name of Game cannot be empty"),
    body("newPrice")
    .trim()
    .notEmpty()
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00"),
    body("newCategoryChoice")
]

export const sendNewGameForm = [
    validateNewGame, 
    async (request, response) => {
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("errors", {
                errors: errors.array()
            })
        }

        const { newName, newPrice, newCategoryChoice} = matchedData(request);

        await AddingNewGame(newName, newPrice, newCategoryChoice);
        response.redirect("/allGames");
    }   
]
