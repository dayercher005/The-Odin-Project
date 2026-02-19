import { body, validationResult, matchedData } from 'express-validator';
import { AddMessage } from '../../db/Queries/Create.js';

const validateNewMessage = [
    body("message")
]

export function renderNewMessageForm(request, response){
    response.render("CreateNewMessage/createNewMessage")
}

export const  sendNewMessageForm = [
    validateNewMessage, 
    (request, response) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()){
            response.status(404).render("partials/error")
        }
        const { message } = matchedData(request);
        AddMessage(request.user.name, message);
        response.redirect("/");
    }
]