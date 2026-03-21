import type { Request, Response} from 'express';

export function renderCreateFolderForm(req: Request, res: Response){
    res.locals.folderParameters = req.params.folder

    res.render("CreateFolder/createFolder");
}