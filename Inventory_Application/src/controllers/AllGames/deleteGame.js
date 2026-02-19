import { DeletingGameQuery } from '../../db/Queries/queries.js'

export async function DeleteGame(request, response){

    await DeletingGameQuery(request.params.gameID);
    response.redirect("/allGames");
}