/* Rock paper scissors game

No user interface. 

User will input data through console. Other data will be give by computer. Need two players 

Desired output will be to determine the winner of the game.

How to get desired output?

Will we have to get a selection from both the computer and the user.

compare the two selections and deermine who wins using game rules.

output winner. 

*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1st step determine computers choice
function getComputerChoice() {
    let choice = getRandomInt(1, 3);
    //console.log(choice);

    if (choice === 1) return "Rock";
    else if (choice === 2) return "Paper";
    else if (choice === 3) return "Scissor";
    else return "ERROR ON COMPUTER CHOICE";
}

//plays round of game 
function playRound(computerChoice, playerChoice) {
    const computer = computerChoice.toLowerCase();
    const player = playerChoice.toLowerCase();

    if (computer === player) {
        console.log(`This is a tie. You both picked ${computerChoice}. Try again or dont i do not really care.`);
        return 0;
    }
    else if ((computer === 'rock' && player === "scissor") || (computer === 'scissor' && player === "paper") || (computer === 'paper' && player === "rock")) {
        console.log(`You is a loser! ${computerChoice} beats ${playerChoice}`);
        return -1;
    }
    else {
        console.log(`You is a winner! ${playerChoice} beats ${computerChoice}`);
        return 1;
    }
}

/* quick test 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

function getPlayerChoice() {
    let playerChoice = '';
    let playerChoiceLower = '';

    do {
        playerChoice = prompt("Pick something please????");
        //console.log(playerChoice);
        if (!playerChoice) {
            console.log('thanks for playing!');
            break;
        }
        playerChoiceLower = playerChoice.toLowerCase();
        //console.log(playerChoiceLower);
    } while (playerChoiceLower != 'rock' && playerChoiceLower != 'scissor' && playerChoiceLower != 'paper');
    return playerChoice;
}

//play game first to 5 wins
function game() {
    let playerRounds = 0;
    let computerRounds = 0;

    while(playerRounds < 5 && computerRounds < 5) {
        let playerChoice = getPlayerChoice();
        if(!playerChoice) break;
        let winner = playRound(getComputerChoice(), playerChoice);
        if (winner > 0) playerRounds++;
        else if (winner < 0) computerRounds++;
    }
    
    console.log(`Computer: ${computerRounds} Human: ${playerRounds}`);
    if (playerRounds > computerRounds) console.log("You win! Good Job!!!!")
    else if (computerRounds > playerRounds) console.log('You is a loser lolololololol');
    else console.log("you tied which is pretyr much a loss lololololo!!!");
}
game();
