import { Router } from 'express'
import { newMessagesGetMethod } from '../controllers/newMessagesController.js'

const newMessagesRouter = Router();

newMessagesRouter.get("/", newMessagesGetMethod)

export { newMessagesRouter }