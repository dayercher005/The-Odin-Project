import type { Request, Response } from 'express';

export function renderSignUpForm(req: Request, res: Response){
    res.render("Sign-Up/sign-up");
}
