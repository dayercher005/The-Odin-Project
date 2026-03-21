import type { Request, Response } from 'express';
import { DeleteFile } from '../../lib/queries.ts';

export async function deleteIndividualFile(req: Request, res: Response){

    await DeleteFile(req.params.file);

    res.redirect(`/dashboard/${req.params.folder}`)
}