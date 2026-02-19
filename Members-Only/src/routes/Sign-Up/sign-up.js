import { Router } from 'express';
import { renderSignUpForm } from '../../controllers/Sign-Up/renderForm.js';
import { sendSignUpForm } from '../../controllers/Sign-Up/sendForm.js';

export const SignUpFormRouter = Router();

SignUpFormRouter.get("/", renderSignUpForm);
SignUpFormRouter.post("/", sendSignUpForm);