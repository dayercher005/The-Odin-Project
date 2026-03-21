import type { Request, Response, NextFunction } from 'express'

export function renderLogOut(req: Request, res: Response, next: NextFunction){
    req.logout((error) => {
        if (error){
            return next(error);
        }
        res.redirect("/");
    })
}