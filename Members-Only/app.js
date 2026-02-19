import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { IndexRouter } from './src/routes/MessagesPage/index.js';
import { SignUpFormRouter } from './src/routes/Sign-Up/sign-up.js';
import { LogInFormRouter } from './src/routes/Log-In/log-in.js';
import { LogOutRouter } from './src/routes/Log-Out/log-out.js';
import { CreateNewMessageRouter } from './src/routes/CreateNewMessage/createNewMessage.js';
import { AdminRouter } from './src/routes/Admin/renderAdminForm.js';
import { ErrorRouter } from './src/routes/Error/error.js';
import passport from 'passport';
import session from 'express-session';
import { PassportConfiguration } from './src/config/passport.js';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "/public/");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }))
app.use(passport.session())

PassportConfiguration(passport);


app.use("/", IndexRouter);
app.use("/sign-up", SignUpFormRouter);
app.use("/log-in", LogInFormRouter);
app.use("/log-out", LogOutRouter);
app.use("/createNewMessage", CreateNewMessageRouter);
app.use("/admin", AdminRouter);
app.use("/error", ErrorRouter);


const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});