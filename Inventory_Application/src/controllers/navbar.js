import { GettingAllGames, GettingCategories, GettingAllGameNames } from '../db/Queries/queries.js';

export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'},
    {href: '/categories', text: 'Categories'}
]


export async function renderErrorNavbar(request, response){
    response.locals.navbarElements = navbarElements;
    response.render("error");
}