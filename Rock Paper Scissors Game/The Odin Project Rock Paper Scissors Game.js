const Scissors ="scissors"
const Rock = "rock"
const Paper = "paper"
const tie = "Its a tie!"
const paper_beats_rock_you_lose = "Computer chose Paper while you chose Rock. Paper beats Rock, you lose..."
const rock_beats_scissors_you_win = "Computer chose Scissors while you chose Rock. Rock beats Scissors, you win!"
const paper_beats_rock_you_win = "Computer chose Rock while you chose Paper. Paper beats Rock, you win!"
const scissors_beats_paper_you_lose = "Computer chose Scissors while you chose Paper. Scissors beats Paper, you lose..."
const rock_beats_scissors_you_lose = "Computer chose Rock while you chose Scissors. Rock beats Scissors, you lose..."
const scissors_beats_paper_you_win = "Computer chose Paper while you chose Scissors. Scissors beats Paper, you win!"
const miscellaneous = "Please key in either Rock Paper or Scissors or we will deduct your score!!! "
let player_score = 0;
let computer_score = 0;


let playerSelection = prompt("Choose either Rock, Paper or Scissors")
playerSelection = playerSelection.toLowerCase()


function GetComputerChoice(){
     let result = Math.floor(Math.random() * 8)
     if (result < 3){
        return Scissors
     } else if (result > 5){
        return Rock
     } else {
        return Paper
     }
}
let computerSelection = GetComputerChoice()


function playRound (playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return tie
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return paper_beats_rock_you_lose
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return rock_beats_scissors_you_win
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return paper_beats_rock_you_win
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return scissors_beats_paper_you_lose
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return rock_beats_scissors_you_lose
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return scissors_beats_paper_you_win
    } else{
        return miscellaneous
    }
}

function showPlayRound (playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        alert (tie)
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        alert (paper_beats_rock_you_lose)
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        alert (rock_beats_scissors_you_win)
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        alert (paper_beats_rock_you_win)
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        alert (scissors_beats_paper_you_lose)
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        alert (rock_beats_scissors_you_lose)
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert (scissors_beats_paper_you_win)
    } else{
            alert("You have failed to follow the instructions")
        }
    }


function playGame(){
    if(playRound(playerSelection, computerSelection) == paper_beats_rock_you_lose || playRound(playerSelection, computerSelection) == rock_beats_scissors_you_lose || playRound(playerSelection, computerSelection) == scissors_beats_paper_you_lose){
        computer_score ++
    } else if (playRound(playerSelection, computerSelection) == paper_beats_rock_you_win || playRound(playerSelection, computerSelection) == rock_beats_scissors_you_win || playRound(playerSelection, computerSelection) == scissors_beats_paper_you_win ){
        player_score ++
    } else if(playRound (playerSelection, computerSelection) == tie){
        
    } else{
        player_score --
    }
    alert("Player score is " + player_score + " while Computer score is " + computer_score)
}

playerSelection = playerSelection.toLowerCase()
    computerSelection=GetComputerChoice()
    playRound(playerSelection, computerSelection)
    showPlayRound(playerSelection, computerSelection)
    playGame()

for(let i=0; i<4; i++){
    playerSelection = prompt("Choose either Rock, Paper or Scissors")
    playerSelection = playerSelection.toLowerCase()
    computerSelection=GetComputerChoice()
    playRound(playerSelection, computerSelection)
    showPlayRound(playerSelection, computerSelection)
    playGame()
}

if(player_score>computer_score){
    alert("Congratulations, you've won!")
} else if (computer_score>player_score) {
    alert("Sorry, but you've lost...")
} else {
    alert("Its a draw!")
}

