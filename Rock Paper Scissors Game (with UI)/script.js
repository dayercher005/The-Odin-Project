const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const reset = document.querySelector("#reset");
const buttons = document.querySelectorAll(".button");
const choices = ["Paper", "Rock", "Scissors"];
let click = document.querySelector("#click");
let yourScore = document.querySelector("#yourScore");
let computerScore = document.querySelector("#computerScore");
let YourScore = 0;
let ComputerScore = 0;



function computerChoice(){
    return choices[Math.floor(Math.random()*3)];
}


rock.addEventListener("click", () => {
    computerChoice();
    if(computerChoice() == "Paper"){
        click.textContent = "Computer chose Paper. Paper beats Rock, you lose...";
        ComputerScore ++;
    } else if (computerChoice() == "Rock"){
        click.textContent = "Computer chose Rock. Its a draw!";
    } else {
        click.textContent = "Computer chose Scissors. Rock beats Scissors, you win!";
        YourScore ++;
    }
    yourScore.textContent = `Your Score: ${YourScore}`;
    computerScore.textContent = `Computer Score: ${ComputerScore}`;
    checkScore();
});


scissors.addEventListener("click", () => {
    computerChoice();
    if(computerChoice() == "Paper"){
        click.textContent = "Computer chose Paper. Scissors beats Paper, you win!";
        YourScore ++;
    } else if (computerChoice() == "Rock"){
        click.textContent = "Computer chose Rock. Rock beats Scissors, you lose...";
        ComputerScore ++;
    } else {
        click.textContent = "Computer chose Scissors. Its a draw!";
    }
    yourScore.textContent = `Your Score: ${YourScore}`;
    computerScore.textContent = `Computer Score: ${ComputerScore}`;
    checkScore();
});


paper.addEventListener("click", () => {
    computerChoice();
    if(computerChoice() == "Paper"){
        click.textContent = "Computer chose Paper. Its a draw!";
    } else if (computerChoice() == "Rock"){
        click.textContent = "Computer chose Rock. Paper beats Rock, you win!";
        YourScore ++;
    } else {
        click.textContent = "Computer chose Scissors. Scissors beats Paper, you lose...";
        ComputerScore ++;
    };
    yourScore.textContent = `Your Score: ${YourScore}`;
    computerScore.textContent = `Computer Score: ${ComputerScore}`;
    checkScore();
});


reset.onclick = () => {
    YourScore = 0;
    ComputerScore = 0;
    yourScore.textContent = `Your Score: ${YourScore}`;
    computerScore.textContent = `Computer Score: ${ComputerScore}`;
    click.textContent = "Click either of the buttons to start!";
    buttons.forEach(buttons =>{
        buttons.disabled = false;
    })
}

function checkScore(){
    if (YourScore==5){
        click.textContent = "Congratulations!!! You won the game!";
        buttons.forEach(buttons =>{
           buttons.disabled = true; 
        })
    } else if (ComputerScore == 5){
        click.textContent = "Sorry, you lost to the Computer...";
        buttons.forEach(buttons =>{
            buttons.disabled = true;
        })
    }
}