let userScore = 0
let computerScore = 0

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
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw.";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose.";
            computerScore++;
        } else {
            return "You win";
            userScore++;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win";
            userScore++;
        } else {
            return "You lose";
            computerScore++;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose";
            computerScore++;
        } else {
            return "You win";
            userScore++;
        }
    }
 }
 
function game() {
    playerSelection = prompt('Insert').toLowerCase();
    computerSelection = getComputerChoice();
    return console.log(playRound(playerSelection,computerSelection)) 
}

function checkWinner() {
    if (computerScore > userScore) {
        return console.log("Computer won!");
    } else {
        return console.log("Congratulations, you won!");
    }
}

for ( i = 0; i < 5; i++) {
    game();
    console.log(playerSelection,computerSelection);
}

checkWinner()
