import { Router } from 'express';
import { renderLogInForm } from '../../controllers/Log-In/renderForm.js';
import { sendLogInForm } from '../../controllers/Log-In/sendForm.js';

export const LogInFormRouter = Router();

LogInFormRouter.get("/", renderLogInForm);
LogInFormRouter.post("/", sendLogInForm);