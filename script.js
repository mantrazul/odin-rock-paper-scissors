function getComputerChoice() {
    const randomMove = Math.floor(Math.random()*3);
    switch (randomMove) {
        case 0:
        return 'Rock';
        case 1:
        return 'Paper';
        case 2:
        return 'Scissors';
    }   
 }

