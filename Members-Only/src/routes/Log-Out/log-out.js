import { Router } from 'express';
import { LogOutController } from '../../controllers/Log-Out/log-out.js';

export const LogOutRouter = Router();

LogOutRouter.get("/", LogOutController);