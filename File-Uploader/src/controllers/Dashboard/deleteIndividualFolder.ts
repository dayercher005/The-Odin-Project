import type { Request, Response } from 'express';
import { DeleteFolder } from '../../lib/queries.ts';

export async function deleteIndividualFolder(req: Request, res: Response){

    await DeleteFolder(req.params.folder);

    res.redirect("/dashboard");
}