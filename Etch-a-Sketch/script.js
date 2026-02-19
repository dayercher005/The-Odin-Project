let gridLength;
const reset = document.querySelector("#resetButton");
const dimension = document.querySelector("#dimensionButton");
const RGB = document.querySelector("#RGBbutton");
const div = document.createElement("div");

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let num = 0; num < 6; num++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function createGrid(gridLength){
    const container = document.querySelector("#div-container");
    container.innerHTML = "";
    container.setAttribute("style", "width: 750px; height: 750px");

    for (let i =0; i < (gridLength * gridLength); i++){
        const div = document.createElement("div");
        div.classList.add("div");
        div.setAttribute("style", "height: " + 750/gridLength + "px; width: " + 750/gridLength + "px;");
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `hsl(0, 100%, 0%)`;
        })
        RGB.addEventListener("click", () => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = getRandomColor();
            })
        })
        
    }
    reset.addEventListener("click", () =>{
        createGrid(gridLength);
    })
    
}

dimension.addEventListener("click", () => {
    let gridLength = prompt("Pick a number from 1-100 for your Grid Length!");
    if (gridLength == NaN || gridLength > 100 || gridLength < 1){
        alert("Please pick an integer number from 1-100!");
        createGrid(16);
    } 
    createGrid(gridLength);
    
})

createGrid(16);
