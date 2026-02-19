import { Router } from 'express'
import { indexGetMethod, indexPostMethod } from '../controllers/indexController.js'

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router()

indexRouter.get("/", indexGetMethod);

indexRouter.post("/newMessages", indexPostMethod);

export { indexRouter, messages }