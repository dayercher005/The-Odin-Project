export function renderIndividualMessages(request, response){
    response.locals.user = request.user
    response.render("partials/admin")
}