import type { Request, Response } from 'express';
import { ReadAllFiles } from '../../lib/queries.ts';

export async function renderIndividualFolder(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder;

    const FolderData = await ReadAllFiles(req.params.folder);

    res.locals.folderName = FolderData[0]?.name;
    res.locals.folderDetails = FolderData[0];
    
    res.render("Dashboard/folder");
}