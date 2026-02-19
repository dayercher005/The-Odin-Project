import { messages } from '../routes/index.js'

async function indexGetMethod(request, response){
    response.render("index", { title: "Mini Message-board", messages: messages })
}

async function indexPostMethod(request, response){
    const messageText = request.body.messageText
    const name = request.body.name
    
    messages.push({ text: name, user: messageText, added: new Date() });
    response.redirect("/");
    response.send("Success")
}

export { indexGetMethod, indexPostMethod }