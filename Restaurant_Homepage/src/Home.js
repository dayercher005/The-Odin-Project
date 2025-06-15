import Sushi from "./Sushi.png"

export const HomeFunction = () => {

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.height = "80vh";
    
    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.classList.add("contentContainer")
    content.appendChild(contentContainer);


    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("descriptionContainer");
    contentContainer.appendChild(descriptionContainer);
    descriptionContainer.style.display = "flex";
    descriptionContainer.style.alignItems = "center";
    descriptionContainer.style.justifyContent = "center;"
    descriptionContainer.style.flexDirection = "column";

    const mainDescription = document.createElement("h1");
    mainDescription.classList.add("mainDescription");
    mainDescription.textContent = "Serving you the best Sushi the country has to offer";
    descriptionContainer.appendChild(mainDescription);
    
    const minorDescription = document.createElement("div");
    minorDescription.classList.add("minorDescription");
    minorDescription.textContent = "Sushi is a traditional Japanese dish primarily composed of cooked, vinegared rice, often combined with various ingredients like seafood, vegetables, or eggs"
    descriptionContainer.appendChild(minorDescription);
    

    const SushiImage = document.createElement("img");
    SushiImage.src = Sushi
    SushiImage.classList.add("HomeSushiImage");
    contentContainer.appendChild(SushiImage);
    SushiImage.style.margin = "auto";

    const orderButton = document.createElement("button");
    orderButton.classList.add("orderButton");
    descriptionContainer.appendChild(orderButton)
    orderButton.textContent = "Order Now"
}


