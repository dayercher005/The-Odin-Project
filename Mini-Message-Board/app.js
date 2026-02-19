import express from 'express'
import path from 'node:path'
import { indexRouter } from "./routes/index.js"
import { newMessagesRouter } from "./routes/newMessages.js"
import { fileURLToPath } from 'node:url';

const PORT = 8080;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true}));
app.use("/", indexRouter)
app.use("/newMessages", newMessagesRouter)
app.use(express.static(assetsPath))


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:8080")
})