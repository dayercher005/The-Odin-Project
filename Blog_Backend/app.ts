import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import { UserFrontend } from './src/routes/User-Frontend.ts';
import { AuthorFrontend } from './src/routes/Author-Frontend.ts';
import "./src/config/jwtStrategy.ts";

const app: Application = express();

const allowedOrigins: string[] = ['https://user-blog-frontend.vercel.app', 'https://author-blog-frontend.vercel.app'];

interface DynamicCorsOptionsType {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
}

const DynamicCorsOptions: DynamicCorsOptionsType = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else{
      callback(new Error('Unauthorized origin'));
    }
  }
}

app.use(cors(DynamicCorsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/author", AuthorFrontend);
app.use("/user", UserFrontend);


const PORT = 8080;
app.listen(PORT, (error: any) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});