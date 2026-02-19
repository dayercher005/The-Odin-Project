import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { indexRouter } from './src/routes/HomePage/index.js';
import { allGamesRouter } from './src/routes/AllGames/allGames.js';
import { newGameRouter } from './src/routes/NewGamesForm/newGame.js';
import { categoriesRouter } from './src/routes/Categories/categories.js';
import { renderErrorPage } from './src/controllers/error.js';

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "/public/");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/allGames", allGamesRouter);
app.use("/newGame", newGameRouter);
app.use("/categories", categoriesRouter);


const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    renderErrorPage()
  }
  console.log(`Game Inventory Application - listening on port ${PORT}!`);
});