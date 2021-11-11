const objects = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor',
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
    document.getElementById("result").innerHTML = result;
}

updateUI(playerPoint,computerPoint,round,"");

function playRound(selection){
    playerSelection = playerPlay(selection);
    computerSelection = computerPlay();
    round++;
    let result = `You choose ${playerSelection}<br> Computer choose ${computerSelection}<br> ${getWinner(computerSelection,playerSelection)} win the round !`;
    if(round === 5 || playerPoint === 3 || computerPoint === 3)
    {
        if (playerPoint > computerPoint) result = "End of the Game.<br>You Win!";
        else result = "End of the Game.<br>You Loose!";
        document.getElementById("playerinterface").style.display = "none";
    }
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
    return play;
}
let getWinner = (computerSelection, playerSelection) => {   
    if(computerSelection == playerSelection)
    {
        return "Nobody";
    }
    else if((computerSelection == objects.ROCK && playerSelection == objects.SCISSOR) ||
        (computerSelection == objects.PAPER && playerSelection == objects.ROCK) ||
        (computerSelection == objects.SCISSOR && playerSelection == objects.PAPER))
        {
            document.getElementById("computerPoint").innerHTML = computerPoint++;
            return "Computer";
        }
    else{
        document.getElementById("playerPoint").innerHTML = playerPoint++;
        return "You";
    } 
}
let restart = () => {
    playerPoint = 0;
    computerPoint = 0;
    round = 0;
    document.getElementById("playerinterface").style.display = "block"; 
    updateUI(playerPoint,computerPoint,round,"");    
}