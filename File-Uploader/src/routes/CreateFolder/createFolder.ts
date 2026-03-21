import { Router } from 'express';
import { renderCreateFolderForm } from '../../controllers/CreateFolder/renderCreateFolderForm.ts';
import { validateCreateFolderForm, sendCreateFolderForm } from '../../controllers/CreateFolder/sendCreateFolderForm.ts';
import { authenticateRoute } from '../../config/authenticateRoute.ts';

export const CreateFolderRouter = Router();

CreateFolderRouter.get("/", authenticateRoute, renderCreateFolderForm);
CreateFolderRouter.post("/", validateCreateFolderForm, sendCreateFolderForm);