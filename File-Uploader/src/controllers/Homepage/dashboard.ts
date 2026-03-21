import type { Request, Response } from 'express';

export function renderDashboardPage(req:Request, res: Response){
    res.render("Dashboard/dashboard")
}