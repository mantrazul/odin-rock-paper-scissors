let userScore = 1;
let computerScore = 1;
const maxRounds = 5;
const buttons = document.querySelectorAll('input');
const narratorText = document.querySelector('.narrator');
const playerPoints = document.querySelector('.playerPoints');
const computerPoints = document.querySelector('.computerPoints');

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
    computerPoints.innerHTML = computerScore++
    return narratorText.innerHTML = "Oh, no. You lost!"
 }
 
function playerWin() {
    playerPoints.innerHTML = userScore++;
    return narratorText.innerHTML = "Congratulations, you won!"
}

 function playRound(playerSelection) {
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
        return narratorText.innerHTML = "It's a draw."
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
        return narratorText.innerHTML = "Congratulations, you won!"
    }
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', function(){
    playRound(buttons.value.toLocaleLowerCase())
    })
})