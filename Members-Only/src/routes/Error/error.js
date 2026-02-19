import { Router } from 'express';
import { ErrorController } from '../../controllers/Error/error.js';

export const ErrorRouter = Router();

ErrorRouter.get("/", ErrorController);