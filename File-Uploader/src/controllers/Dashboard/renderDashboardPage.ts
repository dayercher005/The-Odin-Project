import type { Request, Response } from 'express';
import { ReadAllFolders } from '../../lib/queries.ts';

export async function renderDashboardPage(req: Request, res: Response){
    res.locals.user = req.user;
    const user = await ReadAllFolders(res.locals.user.id);
    res.locals.member = user[0];
    res.render("Dashboard/dashboard");
}