import { Router } from 'express';
import { ensureAuthentication } from '../../config/passport.js';
import { renderAdminForm } from '../../controllers/Admin/renderAdminForm.js';
import { sendAdminForm } from '../../controllers/Admin/sendAdminForm.js';

export const AdminRouter = Router();

AdminRouter.get("/", ensureAuthentication, renderAdminForm);
AdminRouter.post("/", sendAdminForm);