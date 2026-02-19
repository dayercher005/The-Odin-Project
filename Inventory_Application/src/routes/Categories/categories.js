import { Router } from 'express';
import { RenderCategoriesPage } from "../../controllers/Categories/categories.js";
import { RenderIndividualCategoryGames, DeleteCategoryForm } from '../../controllers/Categories/individualCategory.js';

export const categoriesRouter = Router();

categoriesRouter.get("/", RenderCategoriesPage);
categoriesRouter.get("/:category", RenderIndividualCategoryGames);
categoriesRouter.post("/:category", DeleteCategoryForm);