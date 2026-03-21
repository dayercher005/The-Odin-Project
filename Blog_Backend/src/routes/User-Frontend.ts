import { Router } from 'express';
import { renderHomepage } from '../controllers/User/Homepage.ts';
import { renderDashboard, renderIndividualPost, verifyUserStatus } from '../controllers/User/Dashboard.ts';
import { renderCommentForm, validateCommentForm, sendCommentForm } from '../controllers/User/CreateComment.ts';
import { validateLogInForm, sendLogInForm, renderLoginForm } from '../controllers/User/Login.ts';
import { validateSignUpForm, sendSignUpForm, renderSignupForm } from '../controllers/User/SignUp.ts';
import "../config/jwtStrategy.ts";
import passport from 'passport';

export const UserFrontend = Router();

UserFrontend.get("/", 
    passport.authenticate("UserJwtStrategy", {session: false}),
    renderHomepage
);

UserFrontend.get("/dashboard",
    passport.authenticate("UserJwtStrategy", {session: false}), 
    renderDashboard,
    verifyUserStatus
);

UserFrontend.get("/:blogID", 
    passport.authenticate("UserJwtStrategy", {session: false}),
    renderIndividualPost, 
    verifyUserStatus
);

UserFrontend.get("/:blogID/comment", 
    passport.authenticate("UserJwtStrategy", {session: false}), 
    renderCommentForm,
);

UserFrontend.post("/:blogID/comment", 
    passport.authenticate("UserJwtStrategy", {session: false}), 
    validateCommentForm, 
    sendCommentForm
);

UserFrontend.get("/log-in",
    renderLoginForm
);

UserFrontend.post("/log-in", 
    validateLogInForm, 
    sendLogInForm
);


UserFrontend.get("/sign-up", 
    renderSignupForm
);

UserFrontend.post("/sign-up", 
    validateSignUpForm, 
    sendSignUpForm
);
