import { Router } from 'express';
import { renderLogInForm } from '../../controllers/Log-In/renderLogInForm.ts';
import { validateLogInForm, sendLogInForm} from '../../controllers/Log-In/sendLogInForm.ts';

export const LogInRouter = Router(); 

LogInRouter.get("/", renderLogInForm);
LogInRouter.post("/", validateLogInForm, sendLogInForm);