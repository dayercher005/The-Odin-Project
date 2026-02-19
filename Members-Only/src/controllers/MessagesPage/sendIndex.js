import { DeleteMessages } from '../../db/Queries/Delete.js';

export function sendIndex(request, response){
    DeleteMessages();
    response.redirect("/");
}