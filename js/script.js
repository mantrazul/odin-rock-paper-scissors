	
let userScore = 1;
let computerScore = 1;
let countRounds = 1;


//doom setting
const buttons = document.querySelectorAll('input');
const narratorText = document.querySelector('.narrator');
const playerPoints = document.querySelector('.playerPoints');
const computerPoints = document.querySelector('.computerPoints');
const counterRounds = document.querySelector('.rounds')


//class list
computerPoints.classList.add("scoreComputer");
playerPoints.classList.add("scorePlayer");
narratorText.classList.add("narratorText");

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
    counterRounds.innerHTML = countRounds++;
    return narratorText.innerHTML = "Oh, no. You lost!"
 }
 
function playerWin() {
    playerPoints.innerHTML = userScore++;
    counterRounds.innerHTML = countRounds++;
    return narratorText.innerHTML = "Congratulations, you won!"
}

 function playRound(playerSelection) {
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
        counterRounds.innerHTML = countRounds++;
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
    if(computerScore === 6 || userScore === 6) {
        checkWinner()
        disableButtons()
    }
 }

function checkWinner() {
    if (computerScore > userScore) {
        return narratorText.innerHTML = "Oh no, computer won."
    } else {
        return narratorText.innerHTML = "Congratulations, you won!"
    }
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', function(){
        
        playRound(buttons.value.toLocaleLowerCase())
    
    })
})

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

const audio = new Audio("sound/button.wav")

buttons.forEach(buttons => {
    buttons.addEventListener('click', function() {
        audio.play()
    })
})