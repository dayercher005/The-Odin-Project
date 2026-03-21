import type { Request, Response, NextFunction} from 'express';

export function authenticateRoute(req: Request, res: Response, next: NextFunction){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}