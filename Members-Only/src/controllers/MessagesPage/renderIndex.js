import { GetAllMessages } from '../../db/Queries/Read.js'

export async function renderIndexPage(request, response){

    const messages = await GetAllMessages();

    response.locals.user = request.user;
    response.locals.messages = messages;

    response.render("MessagesPage/index");
}