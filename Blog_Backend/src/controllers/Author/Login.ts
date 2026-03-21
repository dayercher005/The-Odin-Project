import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import { prisma } from '../../lib/prisma.ts';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../../config/jwtGenerator.ts';
import { ReadIndividualAuthor }  from '../../lib/queries.ts';


export const validateLogInForm: (ValidationChain | RequestHandler)[] = [
    body("username").custom(async (value, { req }) => {
        if (!value) { throw new Error("Username cannot be empty")}
        const author = await prisma.author.findUnique({
            where: { username: value }
        })
        req.author = author
    }),
    body("password").custom(async (value, {req}) => {
        if (!value) { throw new Error("Password cannot be empty")}
        const EncryptedPassword = req.author.password;
        const matchedPassword = bcrypt.compare(value, EncryptedPassword);

        if (!matchedPassword){
            throw new Error("Incorrect password");
        }
    })
]

export async function sendLogInForm(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json();
    }

    const individualAuthor: any = await ReadIndividualAuthor(req.body.username);
    const token = generateJWT(individualAuthor?.id, individualAuthor?.username);
    return res.json({token: token})
}

export function getLogInForm(req: Request, res: Response){
    return res.json({
        message: "Success"
    });
};