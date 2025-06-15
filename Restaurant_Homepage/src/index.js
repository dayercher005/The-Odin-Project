import "./styles.css"
import {HomeFunction} from "./Home.js"
import {AboutFunction} from "./About.js"
import {MenuFunction} from "./Menu.js"


const HomeBtn = document.querySelector("#HomeBtn");
const AboutBtn = document.querySelector("#AboutBtn");
const MenuBtn = document.querySelector("#MenuBtn");

HomeBtn.addEventListener("click", () =>{
    HomeFunction();
})

AboutBtn.addEventListener("click", () =>{
    AboutFunction();
})

MenuBtn.addEventListener("click", () =>{
    MenuFunction();
})

HomeFunction();