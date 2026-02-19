async function newMessagesGetMethod(request, response){
    response.render("form", {title: "Send a message!"})
}

export { newMessagesGetMethod }