import type { Request, Response } from 'express';
import { ReadIndividualFile } from '../../lib/queries.ts';

export async function renderIndividualFile(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder;
    res.locals.fileParameters = req.params.file;

    function DateConverter(gmtDateString: any) {
        const dateObj = new Date(gmtDateString);
        const localDateString = dateObj.toLocaleString();
        return localDateString;
    }

    const FileData = await ReadIndividualFile(req.params.file);
    res.locals.fileName = FileData?.name;
    res.locals.fileSize = FileData?.size;
    res.locals.publicURL = FileData?.publicURL;
    res.locals.date = DateConverter(FileData?.date);

    res.render("Dashboard/file");
}