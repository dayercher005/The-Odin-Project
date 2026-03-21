import { Router } from 'express';
import { renderLogOut } from '../../controllers/Log-Out/log-out.ts';

export const LogOutRouter = Router();

LogOutRouter.get("/", renderLogOut);
