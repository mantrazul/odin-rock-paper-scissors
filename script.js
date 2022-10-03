let userScore = 0;
let computerScore = 0;
const maxRounds = 5;

function getComputerChoice() {
    const randomMove = Math.floor(Math.random()*3);
    switch (randomMove) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }   
 }

 function computerWin() {
    computerScore++
    return console.log("You lose");
 }
 
function playerWin() {
    userScore++;
    return console.log("You win");
}

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw.";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWin();
        } else {
            playerWin();
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWin();
        } else {
            computerWin();
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWin();
        } else {
            playerWin();
        }
    }
 }

function checkWinner() {
    if (computerScore > userScore) {
        return console.log("Computer won!");
    } else {
        return console.log("Congratulations, you won!");
    }
}

function game() {
    for (let i = 0; i < maxRounds; i++ ) {
        playerSelection = prompt('Insert').toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log(playerSelection,computerSelection) 
    }
    checkWinner();
}

game();