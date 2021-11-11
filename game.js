const objects = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSOR: 'SCISSOR',
}
let computerSelection;
let playerSelection;
let computerPoint = 0;
let playerPoint = 0;
let round = 0;

let updateUI = (playerPoint,computerPoint,round,result) => {
    document.getElementById("playerPoint").innerHTML = playerPoint;
    document.getElementById("round").innerHTML = round;
    document.getElementById("computerPoint").innerHTML = computerPoint;
    document.getElementById("game").innerHTML = result;
    
}

updateUI(playerPoint,computerPoint,round,"");

function playRound(selection){
    playerSelection = playerPlay(selection);
    computerSelection = computerPlay();
    round++;
    let result = getWinner(computerSelection,playerSelection);
    updateUI(playerPoint,computerPoint,round,result);
}
let playerPlay = selection => {
    switch(selection) {
        case 0: 
        return objects.ROCK;
            break;
        case 1:
            return objects.PAPER;
            break;
        case 2:
            return objects.SCISSOR;
    }
}
let computerPlay = () => {
    let play;
    let rdn = Math.floor(Math.random() * 3);
    switch (rdn) {
        case 0: 
            play = objects.ROCK;
            break;
    
        case 1: 
            play = objects.PAPER;
            break;
        case 2: 
                play = objects.SCISSOR;
                break;
    }
    console.log("Computer choose: " + play);
    return play;
}
let getWinner = (computerSelection, playerSelection) => {   
    if(computerSelection == playerSelection)
    {
        return "Draw !";
    }
    else if((computerSelection == objects.ROCK && playerSelection == objects.SCISSOR) ||
        (computerSelection == objects.PAPER && playerSelection == objects.ROCK) ||
        (computerSelection == objects.SCISSOR && playerSelection == objects.PAPER))
        {
            document.getElementById("computerPoint").innerHTML = computerPoint++;
            return "Computer Win !";
        }
    else{
        document.getElementById("playerPoint").innerHTML = playerPoint++;
        return "Player Win !";
    } 
}
let restart = () => {
    playerPoint = 0;
    computerPoint = 0;
    round = 0;
    updateUI(playerPoint,computerPoint,round);    
}