import type { Request, Response} from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import { CreateFolders } from '../../lib/queries.ts';

export const validateCreateFolderForm = [
    body("name")
    .notEmpty()
    .withMessage("Name of Folder cannot be empty!")
]

export async function sendCreateFolderForm(req: Request, res: Response){

    res.locals.user = req.user

    const errors = validationResult(req);
    if (!errors.isEmpty){
        return res.status(404).render("partials/error");
    }

    const { name } = matchedData(req);

    CreateFolders(name, res.locals.user.email);

    return res.redirect("/dashboard");
}