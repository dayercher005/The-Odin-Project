import { body, validationResult, matchedData } from 'express-validator';
import { AddSignUpMembers } from '../../db/Queries/Create.js';
import bcrypt from 'bcryptjs';

const validateSignUpUser = [
    body("fullName")
    .notEmpty()
    .withMessage("Full Name is required"),
    body("username")
    .notEmpty()
    .isEmail()
    .withMessage("Username must be an Email"),
    body("password")
    .notEmpty()
    .isLength({min: 5})
    .withMessage("Password must have a minimum of 5 characters"),
    body("confirmPassword").custom((validatedPassword, { req }) => {
        return validatedPassword == req.body.password
    })
]

export const sendSignUpForm = [
    validateSignUpUser, 
    async (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()){

            return response.status(404).render("partials/error", {error: errors.array()})
        }

        const { fullName, username, password} = matchedData(request);
        const EncryptedPassword = await bcrypt.hash(password, 10);
        AddSignUpMembers(fullName, username, EncryptedPassword, 'member');
        response.redirect("/log-in");
    }
]