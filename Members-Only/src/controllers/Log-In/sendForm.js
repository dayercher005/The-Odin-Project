import { body, validationResult } from 'express-validator';
import passport from 'passport';

const validateLogInUser = [
    body("username")
    .trim()
    .isEmail()
    .withMessage("Username must be an email"),
    body("password")
    .isLength({min: 5})
    .withMessage("Invalid Password")
]

export const sendLogInForm = [
    validateLogInUser, 
    (request, response, next) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()){
            response.status(404).render("partials/error")
        }
        next();
    },
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
    
]
