import express from 'express';
import type { Application } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './src/config/passport.ts';
import session from 'express-session';
import passport from 'passport';
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client.ts'
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { HomePageRouter } from './src/routes/Homepage/homepage.ts';
import { LogInRouter } from './src/routes/Log-In/log-in.ts';
import { LogOutRouter } from './src/routes/Log-Out/log-out.ts';
import { SignUpRouter } from './src/routes/Sign-Up/sign-up.ts';
import { DashboardRouter } from './src/routes/Dashboard/dashboard.ts';
import { CreateFolderRouter } from './src/routes/CreateFolder/createFolder.ts';


const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "/public/");
app.use(express.static(assetsPath));


app.use(
  session({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'a santa at nasa',
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(
      prisma,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
      }
    )
  })
);


app.use(passport.session());


app.use("/", HomePageRouter);
app.use("/sign-up", SignUpRouter);
app.use("/log-in", LogInRouter);
app.use("/log-out", LogOutRouter);
app.use("/dashboard", DashboardRouter);
app.use("/create-folder", CreateFolderRouter);


const PORT = 8080;
app.listen(PORT, (error: any) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});