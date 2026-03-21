import type { Request, Response } from 'express';

export function renderLogInForm(req: Request, res: Response){
    res.render("Log-In/log-in");
}