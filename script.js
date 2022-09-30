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

 const playerSelection = prompt('Insert').toLowerCase()

 const computerSelection = getComputerChoice();

 console.log(playerSelection, computerSelection);

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
    for (let rounds = 0; rounds < 5; rounds++) {
        for (let userScore = 0; userScore < 5; userScore++) {
            if (playRound(playerSelection,computerSelection) === "You win") {
            return userScore++
        }
     }
    }
}

console.log(playRound(playerSelection,computerSelection), playerSelection, computerSelection)
