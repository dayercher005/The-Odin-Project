import { Router } from 'express';
import { renderDashboardPage } from '../../controllers/Dashboard/renderDashboardPage.ts';
import { renderIndividualFolder } from '../../controllers/Dashboard/renderIndividualFolder.ts';
import { deleteIndividualFolder } from '../../controllers/Dashboard/deleteIndividualFolder.ts';
import { renderIndividualFile } from '../../controllers/Dashboard/renderIndividualFile.ts';
import { deleteIndividualFile } from '../../controllers/Dashboard/deleteIndividualFile.ts';
import { renderCreateFileForm } from '../../controllers/CreateFile/renderCreateFileForm.ts';
import { MulterConfig, validateCreateFileForm, sendCreateFileForm } from '../../controllers/CreateFile/sendCreateFileForm.ts';
import { authenticateRoute } from '../../config/authenticateRoute.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", authenticateRoute, renderDashboardPage);

DashboardRouter.get("/:folder", authenticateRoute, renderIndividualFolder);
DashboardRouter.post("/:folder", deleteIndividualFolder);

DashboardRouter.get("/:folder/create-file", authenticateRoute, renderCreateFileForm);
DashboardRouter.post("/:folder/create-file", MulterConfig.single('file'), validateCreateFileForm, sendCreateFileForm);

DashboardRouter.get("/:folder/:file", authenticateRoute, renderIndividualFile);
DashboardRouter.post("/:folder/:file", deleteIndividualFile);