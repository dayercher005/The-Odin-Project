import { GettingAllGames } from '../db/Queries/queries.js';

export async function renderErrorPage(request, response){
    const GamesData = await GettingAllGames();
    response.locals.title = "All available games"
    response.locals.homepageText = `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`
    response.render("errors", {
        gamesData: GamesData
    })
}