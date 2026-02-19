import { Router } from 'express';
import { renderIndex } from '../../controllers/HomePage/index.js';

export const indexRouter = Router();

indexRouter.get("/", renderIndex);