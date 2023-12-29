
function getComputerChoice(){
    
    return choice[Math.floor(Math.random()*choice.length)];
}

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice(choice)

function playRound(){
    if ((playerSelection =='rock' && computerSelection == 'scissors')||
    (playerSelection =='paper' && computerSelection == 'rock') ||
    (playerSelection =='scissors' && computerSelection == 'paper')) {
    
        result = ("You win! " + playerSelection + ' beats ' + computerSelection);
    
    } else if (playerSelection === computerSelection) {
        result = ("it's a draw!");
    } else {
        result = ("You lose! " + computerSelection + ' beats ' + playerSelection);
    } 
    console.log(result);
};

function game(){

};

const playerSelection = "paper";
playRound(playerSelection, computerSelection);