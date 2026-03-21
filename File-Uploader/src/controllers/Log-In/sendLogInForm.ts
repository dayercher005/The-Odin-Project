import { body, validationResult } from 'express-validator';
import type { ValidationChain } from 'express-validator'
import type { Request, Response, NextFunction, RequestHandler } from 'express'; 
import passport from 'passport';

export const validateLogInForm: (ValidationChain | RequestHandler)[] = [
    body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email address"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
]


export const sendLogInForm = [
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(404).render("partials/error", {error: errors.array()})
        } next();
    }, passport.authenticate("local", {
        successRedirect: "/", 
        failureRedirect: "/"
    })
]

