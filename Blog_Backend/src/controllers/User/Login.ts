import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import { prisma } from '../../lib/prisma.ts';
import { generateJWT } from '../../config/jwtGenerator.ts';
import { ReadIndividualUser }  from '../../lib/queries.ts';
import bcrypt from 'bcryptjs';


export const validateLogInForm: (ValidationChain | RequestHandler)[] = [
    body("username").custom( async (value, { req }) => {
        if (!value) { throw new Error("Username cannot be empty")}   

        const user = await prisma.user.findUnique({
            where: { username: value }
        })

        if (!user) {throw new Error("Username not found")};

        req.user = user;
    }),
    
    body("password").custom( async (value, {req}) => {
        if (!value){ throw new Error("Password cannot be empty")}

        const EncryptedPassword = req.user.password;
        const matchedPassword = bcrypt.compare(value, EncryptedPassword);

        if (!matchedPassword){
            throw new Error("Incorrect password")
        }
    })
]


export async function sendLogInForm(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json();
    }
        
    const individualUser: any = await ReadIndividualUser(req.body.username);
    const token = generateJWT(individualUser.id, individualUser.username);
    return res.json({
        token: token
    })
    
}
    
export async function renderLoginForm(req: Request, res: Response){
    return res.json({
        message: "success"
    })
}