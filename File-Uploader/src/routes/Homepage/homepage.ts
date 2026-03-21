import { Router } from 'express';
import { renderHomePage } from '../../controllers/Homepage/homepage.ts';

export const HomePageRouter = Router();

HomePageRouter.get("/", renderHomePage);