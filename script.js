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
        } else {
            return "You win";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win";
        } else {
            return "You lose";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose";
        } else {
            return "You win";
        }
    }
 }
function game() {
    playerSelection = prompt('Insert').toLowerCase();
    computerSelection = getComputerChoice();
    return console.log(playRound(playerSelection,computerSelection)) 
}

for ( i = 0; i < 5; i++) {
    game();
    console.log(playerSelection,computerSelection);   
}
