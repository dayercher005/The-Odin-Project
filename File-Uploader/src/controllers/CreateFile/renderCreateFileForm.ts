import type { Request, Response} from 'express';

export function renderCreateFileForm(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder;

    res.render("CreateFile/createFile");
}