import { navbarElements } from "../navbar.js";
import { GettingCategories } from '../../db/Queries/queries.js';

export async function RenderCategoriesPage(request, response){
    const AvailableCategories = await GettingCategories();

    response.locals.navbarElements = navbarElements;
    response.locals.AvailableCategories = AvailableCategories;
    response.render("Categories/categories")
}