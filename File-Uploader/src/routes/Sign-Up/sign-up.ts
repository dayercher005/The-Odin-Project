import { Router } from 'express';
import { renderSignUpForm } from '../../controllers/Sign-Up/renderSignUpForm.ts';
import { validateSignUpForm, sendSignUpForm } from '../../controllers/Sign-Up/sendSignUpForm.ts';

export const SignUpRouter = Router();

SignUpRouter.get("/", renderSignUpForm);
SignUpRouter.post("/", validateSignUpForm, sendSignUpForm);