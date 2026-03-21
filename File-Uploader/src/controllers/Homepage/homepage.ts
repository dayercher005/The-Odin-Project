import type { Request, Response } from 'express';

export function renderHomePage(req: Request, res: Response){
    res.locals.user = req.user

    res.render("Home/home");

}