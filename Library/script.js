const addButton = document.querySelector("#addButton");
const form = document.querySelector("#form");
const submit = document.querySelector("#submitButton")
const bookContainer = document.querySelector("#bookContainer");
const overlay = document.querySelector(".overlay");
const headlineContainer = document.querySelector("#headlineContainer");
const myLibrary = [];
const card = document.createElement("div");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? "read" : "not read yet"}`;
}

function addBookToLibrary() {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    const books = new Book(author, title, pages, read);
    myLibrary.push(books);
    form.style.display = "none";
    
    
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("style", "background-color: #f8fafc; width: 400px; border-radius: 10px; height: 300px;");
        card.textContent = "";
        bookContainer.appendChild(card);
        const AUTHOR = document.createElement("div");
        AUTHOR.classList.add("section")
        AUTHOR.textContent = book.author;
        const TITLE = document.createElement("div");
        TITLE.classList.add("section");
        TITLE.textContent = book.title;
        const PAGES = document.createElement("div");
        PAGES.classList.add("section");
        PAGES.textContent = book.pages;
        const READ = document.createElement("button");
        READ.classList.add("READButton");
        if(read == true){
            READ.textContent = "Read";
            READ.setAttribute("style", "background-color: rgba(0,255,0,1)");
        } else {
            READ.textContent = "Not Read";
            READ.setAttribute("style", "background-color: rgba(255,0,0,1)");
        }

        if(myLibrary.length > 1){
            myLibrary.splice(0,1);
        }
    

        READ.addEventListener("click", () =>{
            if(read == true){
                read = false;
                READ.textContent = "Not Read";
                READ.setAttribute("style", "background-color: rgba(255,0,0,1)");
            } else if(read == false){
                read = true;
                READ.textContent = "Read";
                READ.setAttribute("style", "background-color: rgba(0,255,0,1)");
            }
        });

        if(read == true){
            READ.textContent = "Read";
            READ.setAttribute("style", "background-color: rgba(0,255,0,1)");
        } else {
            READ.textContent = "Not Read";
            READ.setAttribute("style", "background-color: rgba(255,0,0,1)");
        }

        card.appendChild(AUTHOR);
        card.appendChild(TITLE);
        card.appendChild(PAGES);
        card.appendChild(READ);
    
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "Remove";
    remove.setAttribute("style","border-radius: 7px; background-color: #e4e4e7; font-family: sans-serif; font-size: 1.2em; border: none; margin:10px;")
    card.appendChild(remove);
    headlineContainer.setAttribute("style", "background-color: white");
    overlay.setAttribute("style","background-color:#e4e4e7;");
    addButton.setAttribute("style", "background-color: #e4e4e7");

    remove.addEventListener("click", () => {
        card.removeChild(AUTHOR);
        card.removeChild(TITLE);
        card.removeChild(PAGES);
        card.removeChild(READ);
        card.removeChild(remove);
        bookContainer.removeChild(card);
    });


    })
}


addButton.addEventListener("click", ()=>{
    form.style.display = "grid";
    overlay.setAttribute("style", "background-color: rgba(0,0,0,0.5);");
    headlineContainer.setAttribute("style","background-color: rgba( 100,100,100,0.5");
    addButton.setAttribute("style", "background-color: rgba(0,0,0,0.5");
})



submit.addEventListener("click", Submit)

function Submit(event){
    addBookToLibrary();
    event.preventDefault();
};