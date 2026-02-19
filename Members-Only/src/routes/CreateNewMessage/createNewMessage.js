import { Router } from 'express';
import { renderNewMessageForm, sendNewMessageForm } from '../../controllers/CreateNewMessage/createNewMessage.js';
import { ensureAuthentication } from '../../config/passport.js';


export const CreateNewMessageRouter = Router();


CreateNewMessageRouter.get("/", ensureAuthentication , renderNewMessageForm);
CreateNewMessageRouter.post("/", sendNewMessageForm);