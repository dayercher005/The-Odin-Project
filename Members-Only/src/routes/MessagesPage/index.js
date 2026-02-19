import { Router } from 'express';
import { renderIndexPage } from '../../controllers/MessagesPage/renderIndex.js';
import { sendIndex } from '../../controllers/MessagesPage/sendIndex.js';

export const IndexRouter = Router();

IndexRouter.get("/", renderIndexPage);
IndexRouter.post("/", sendIndex);