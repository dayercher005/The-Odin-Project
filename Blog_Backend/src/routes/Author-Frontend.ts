import { Router } from 'express';
import { renderHomepage } from '../controllers/Author/Homepage.ts';
import { renderDashboard, renderIndividualBlog, renderIndividualComment, deleteIndividualComments } from '../controllers/Author/Dashboard.ts';
import { renderCreateBlogForm, validatePostForm, sendPostForm } from '../controllers/Author/CreateBlog.ts';
import { validateLogInForm, sendLogInForm, getLogInForm } from '../controllers/Author/Login.ts';
import { validateSignUpForm, sendSignUpForm, getSignUpForm } from '../controllers/Author/SignUp.ts';
import "../config/jwtStrategy.ts";
import passport from 'passport';

export const AuthorFrontend = Router();

AuthorFrontend.get("/", 
    passport.authenticate("AuthorJwtStrategy", {session: false}),
    renderHomepage
)

AuthorFrontend.get("/dashboard", 
    passport.authenticate("AuthorJwtStrategy", {session: false}), 
    renderDashboard
);

AuthorFrontend.get("/dashboard/:blogID", 
    passport.authenticate("AuthorJwtStrategy", {session: false}),
    renderIndividualBlog
)

AuthorFrontend.get("/dashboard/:blogID/:commentID",
    passport.authenticate("AuthorJwtStrategy", {session: false}),
    renderIndividualComment
)

AuthorFrontend.delete("/dashboard/:blogID/:commentID",
    passport.authenticate("AuthorJwtStrategy", {session: false}),
    deleteIndividualComments
)

AuthorFrontend.get("/create-blog", 
    passport.authenticate("AuthorJwtStrategy", {session: false}), 
    renderCreateBlogForm
);

AuthorFrontend.post("/create-blog", 
    passport.authenticate("AuthorJwtStrategy", {session: false}), 
    validatePostForm, 
    sendPostForm
);

AuthorFrontend.get("/log-in",
    getLogInForm
);

AuthorFrontend.post("/log-in", 
    validateLogInForm, 
    sendLogInForm
);

AuthorFrontend.get("/sign-up", 
    getSignUpForm
);

AuthorFrontend.post("/sign-up", 
    validateSignUpForm, 
    sendSignUpForm
);