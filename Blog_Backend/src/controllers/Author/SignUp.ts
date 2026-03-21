import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import bcrypt from 'bcryptjs';
import type { ValidationChain } from 'express-validator';
import { CreateAuthors } from '../../lib/queries.ts';


export const validateSignUpForm: (ValidationChain | RequestHandler)[] = [
    body("username")
    .notEmpty()
    .withMessage("Please enter a valid username"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty"),
    body("confirmPassword").custom((password:string , {req}) => {
        return password === req.body.password
    })
]


export async function sendSignUpForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json();
    }

    const { username, password } = matchedData(req);

    const encryptedPassword = await bcrypt.hash(password, 10);

    await CreateAuthors(username, encryptedPassword);
}

export function getSignUpForm(req: Request, res: Response){
    return res.json({
        message: "Success"
    })
}