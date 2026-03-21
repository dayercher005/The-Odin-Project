import type { Request, Response } from 'express';

export function renderHomepage(req: Request, res: Response){
    return res.json({
        user: req.user
    })
}