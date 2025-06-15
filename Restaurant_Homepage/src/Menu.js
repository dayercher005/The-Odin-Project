import SushiItem1 from "./sushiMenu1.jpg";
import SushiItem2 from "./sushiMenu2.jpg"
import SushiItem3 from "./sushiMenu3.jpg";
import SushiItem4 from "./sushiMenu4.jpg"
import SushiItem5 from "./sushiMenu5.jpg";
import SushiItem6 from "./sushiMenu6.jpg"

export const MenuFunction = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    content.appendChild(menuContainer);
    content.style.display = "flex";
    content.style.alignItems = "center";

    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("menuHeader");
    menuContainer.appendChild(menuHeader);
    menuHeader.textContent = "Menu";

    const menuGridContainer = document.createElement("div");
    menuGridContainer.classList.add("menuGridContainer");
    menuContainer.appendChild(menuGridContainer);

/* DOM for 1st Menu Item*/

    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem1)

     const menuTextContainer1 = document.createElement("div");
    menuTextContainer1.classList.add("menuTextContainer");
    menuItem1.appendChild(menuTextContainer1);

    const menuTextTitle1 = document.createElement("h2");
    menuTextTitle1.classList.add("menuTextTitle");
    menuTextTitle1.textContent = "Gunkan Maki";
    menuTextContainer1.appendChild(menuTextTitle1);

    const menuTextDescription1 = document.createElement("p");
    menuTextDescription1.classList.add("menuTextDescription");
    menuTextDescription1.textContent = "A sushi that resembles a battleship, made of a ball of sushi rice wrapped with nori along the side."
    menuTextContainer1.appendChild(menuTextDescription1);

    const menuTextPrice1 = document.createElement("div");
    menuTextPrice1.classList.add("price");
    menuTextPrice1.textContent = "$2.00";
    menuTextContainer1.appendChild(menuTextPrice1);

    const menuImage1 = document.createElement("img");
    menuImage1.src = SushiItem1;
    menuImage1.classList.add("menuImage");
    menuItem1.appendChild(menuImage1);


/* DOM for 2nd Menu Item */

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem2)

     const menuTextContainer2 = document.createElement("div");
    menuTextContainer2.classList.add("menuTextContainer");
    menuItem2.appendChild(menuTextContainer2);

    const menuTextTitle2 = document.createElement("h2");
    menuTextTitle2.classList.add("menuTextTitle");
    menuTextTitle2.textContent = "Shrimp Nigiri";
    menuTextContainer2.appendChild(menuTextTitle2);

    const menuTextDescription2 = document.createElement("p");
    menuTextDescription2.classList.add("menuTextDescription");
    menuTextDescription2.textContent = "A delicate shrimp that is neatly placed over classic Japanese rice."
    menuTextContainer2.appendChild(menuTextDescription2);

    const menuTextPrice2 = document.createElement("div");
    menuTextPrice2.classList.add("price");
    menuTextPrice2.textContent = "$3.00";
    menuTextContainer2.appendChild(menuTextPrice2);

    const menuImage2 = document.createElement("img");
    menuImage2.src = SushiItem2;
    menuImage2.classList.add("menuImage");
    menuItem2.appendChild(menuImage2);

/* DOM for 3rd Menu Item */


    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem3)

    const menuTextContainer3 = document.createElement("div");
    menuTextContainer3.classList.add("menuTextContainer");
    menuItem3.appendChild(menuTextContainer3);

    const menuTextTitle3 = document.createElement("h2");
    menuTextTitle3.classList.add("menuTextTitle");
    menuTextTitle3.textContent = "Uramaki";
    menuTextContainer3.appendChild(menuTextTitle3);

    const menuTextDescription3 = document.createElement("p");
    menuTextDescription3.classList.add("menuTextDescription");
    menuTextDescription3.textContent = "A western-influenced style maki (rolled sushi) where the rice is on the outside and the seaweed (nori) is on the inside."
    menuTextContainer3.appendChild(menuTextDescription3);

    const menuTextPrice3 = document.createElement("div");
    menuTextPrice3.classList.add("price");
    menuTextPrice3.textContent = "$2.00";
    menuTextContainer3.appendChild(menuTextPrice3);

    const menuImage3 = document.createElement("img");
    menuImage3.src = SushiItem3;
    menuImage3.classList.add("menuImage");
    menuItem3.appendChild(menuImage3);

/* DOM for 4th Menu Item */

    const menuItem4 = document.createElement("div");
    menuItem4.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem4)

    const menuTextContainer4 = document.createElement("div");
    menuTextContainer4.classList.add("menuTextContainer");
    menuItem4.appendChild(menuTextContainer4);

    const menuTextTitle4 = document.createElement("h2");
    menuTextTitle4.classList.add("menuTextTitle");
    menuTextTitle4.textContent = "Sashimi";
    menuTextContainer4.appendChild(menuTextTitle4);

    const menuTextDescription4 = document.createElement("p");
    menuTextDescription4.classList.add("menuTextDescription");
    menuTextDescription4.textContent = "Precisely cut slices of deep red (tuna), pale pink (salmon), translucent(snapper) with clean and pure flavors."
    menuTextContainer4.appendChild(menuTextDescription4);

    const menuTextPrice4 = document.createElement("div");
    menuTextPrice4.classList.add("price");
    menuTextPrice4.textContent = "$10.00";
    menuTextContainer4.appendChild(menuTextPrice4);

    const menuImage4 = document.createElement("img");
    menuImage4.src = SushiItem4;
    menuImage4.classList.add("menuImage");
    menuItem4.appendChild(menuImage4);

    /* DOM for 5th Menu Item */

    const menuItem5 = document.createElement("div");
    menuItem5.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem5)

    const menuTextContainer5 = document.createElement("div");
    menuTextContainer5.classList.add("menuTextContainer");
    menuItem5.appendChild(menuTextContainer5);

    const menuTextTitle5 = document.createElement("h2");
    menuTextTitle5.classList.add("menuTextTitle");
    menuTextTitle5.textContent = "Unagi & Inari Sushi";
    menuTextContainer5.appendChild(menuTextTitle5);

    const menuTextDescription5 = document.createElement("p");
    menuTextDescription5.classList.add("menuTextDescription");
    menuTextDescription5.textContent = "Rich and flavourful freshwater eel topped with tare on rice (Unagi Sushi) and a sweet and savoury Sushi stuffed with vinegared rice into seasoned fried tofu (Inari Sushi)."
    menuTextContainer5.appendChild(menuTextDescription5);

    const menuTextPrice5 = document.createElement("div");
    menuTextPrice5.classList.add("price");
    menuTextPrice5.textContent = "$4.50";
    menuTextContainer5.appendChild(menuTextPrice5);

    const menuImage5 = document.createElement("img");
    menuImage5.src = SushiItem5;
    menuImage5.classList.add("menuImage");
    menuItem5.appendChild(menuImage5);

/* DOM for 6th Menu Item */

    const menuItem6 = document.createElement("div");
    menuItem6.classList.add("menuItem");
    menuGridContainer.appendChild(menuItem6)

    const menuTextContainer6 = document.createElement("div");
    menuTextContainer6.classList.add("menuTextContainer");
    menuItem6.appendChild(menuTextContainer6);

    const menuTextTitle6 = document.createElement("h2");
    menuTextTitle6.classList.add("menuTextTitle");
    menuTextTitle6.textContent = "Sushi Platter";
    menuTextContainer6.appendChild(menuTextTitle6);

    const menuTextDescription6 = document.createElement("p");
    menuTextDescription6.classList.add("menuTextDescription");
    menuTextDescription6.textContent = "A deluxe combination of Sushi served including Sashimi, Maki Rolls and Temakis and more! "
    menuTextContainer6.appendChild(menuTextDescription6);

    const menuTextPrice6 = document.createElement("div");
    menuTextPrice6.classList.add("price");
    menuTextPrice6.textContent = "$15.00";
    menuTextContainer6.appendChild(menuTextPrice6);

    const menuImage6 = document.createElement("img");
    menuImage6.src = SushiItem6;
    menuImage6.classList.add("menuImage");
    menuItem6.appendChild(menuImage6);
}