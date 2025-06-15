import Sushi2 from "./Sushi2.png";

export const AboutFunction = () => {

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const secondSushiImage = document.createElement("img");
    secondSushiImage.src = Sushi2;
    secondSushiImage.classList.add("secondSushiImage");
    content.appendChild(secondSushiImage);
    
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");
    content.appendChild(aboutContainer);
    
    const firstSectionHeader = document.createElement("h2");
    firstSectionHeader.classList.add("Section", "aboutHeader");
    firstSectionHeader.textContent = "Who Are We?"
    aboutContainer.appendChild(firstSectionHeader);

    const firstSectionContent = document.createElement("div");
    firstSectionContent.classList.add("Section", "Content");
    firstSectionContent.textContent = "In our Japanese Restaurant, we are dedicated in honing our craft of making Sushis to spread the Japanese culture to our customers. We started this business in making Sushi through our love of Japan's rich traditional culture. Hence, we believe the best way to spread their culture is by serving their famous local delicacy, Sushi!";
    aboutContainer.appendChild(firstSectionContent);

    const secondSectionHeader = document.createElement("h2");
    secondSectionHeader.classList.add("Section", "aboutHeader");
    secondSectionHeader.textContent = "What We Do"
    aboutContainer.appendChild(secondSectionHeader);

    const secondSectionContent = document.createElement("div");
    secondSectionContent.classList.add("Section", "Content");
    secondSectionContent.textContent = "We specialise in making all types of Sushis. From the small and delicate Maki and Uramkai Sushi, to the classic Nigiri and Temaki Sushi, there will always be Sushis catered to your preference. Every Sushi we make is prepared with utmost precision and detail as to us, our customers experience is our top priority, and thats what makes us stand out. ";
    aboutContainer.appendChild(secondSectionContent);

    const thirdSectionHeader = document.createElement("h2");
    thirdSectionHeader.classList.add("Section", "aboutHeader");
    thirdSectionHeader.textContent = "Why We're Here"
    aboutContainer.appendChild(thirdSectionHeader);

    const thirdSectionContent = document.createElement("div");
    thirdSectionContent.classList.add("Section", "Content");
    thirdSectionContent.textContent = "We're here to make an impact on our local community. Apart from spreading the Japanese culture, we also want our customers to have a great time in our restaurant. Our restaurant provides an ideal setting for our customers to unwind and connect with others whilst consuming Sushi.";
    aboutContainer.appendChild(thirdSectionContent);
}
