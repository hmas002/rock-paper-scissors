const buttons = document.querySelectorAll('button');
const resultsContainer = document.querySelector('.results');
const choices = document.createElement('p');
const results = document.createElement('p');
const compScore = document.createElement('p');
const humanScore = document.createElement('p');
const winner = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

resultsContainer.appendChild(choices);
resultsContainer.appendChild(results);
resultsContainer.appendChild(compScore);
resultsContainer.appendChild(humanScore);
resultsContainer.appendChild(winner);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1st step determine computers choice
function getComputerChoice() {
    let choice = getRandomInt(1, 3);
    //console.log(choice);

    if (choice === 1) return "rock";
    else if (choice === 2) return "paper";
    else if (choice === 3) return "scissor";
    else return "ERROR ON COMPUTER CHOICE";
}

//plays round of game 
function playRound(computerChoice, playerChoice) {
    const computer = computerChoice.toLowerCase();
    const player = playerChoice.toLowerCase();

    if (computer === player) {
        results.textContent = `This is a tie. You both picked ${computerChoice}. Try again or dont i do not really care.`;
    }
    else if ((computer === 'rock' && player === "scissor") || (computer === 'scissor' && player === "paper") || (computer === 'paper' && player === "rock")) {
        results.textContent = `You is a loser! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    else {
        results.textContent = `You is a winner! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    }

    compScore.textContent = `Computer score: ${computerScore}`;
    humanScore.textContent = `Human score: ${playerScore}`;
}

function playAgain() {
    const playAgainbtn = document.createElement('button');
    playAgainbtn.textContent = 'Play Again';
    resultsContainer.appendChild(playAgainbtn);
    playAgainbtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        choices.textContent = '';
        results.textContent = '';
        compScore.textContent = '';
        humanScore.textContent = '';
        winner.textContent = '';
        buttons.forEach(button => button.disabled = false);
        resultsContainer.removeChild(playAgainbtn);
    });
}

function isWinner() {
    if(playerScore >= 5 || computerScore >= 5) {
        winner.textContent = playerScore > computerScore ? 'You win' : 'You lose';
        buttons.forEach(button => button.disabled = true);
        playAgain();
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    //console.log(button.className);
    let compChoice = getComputerChoice();
    choices.textContent = `Computer picked ${compChoice}. Human picked ${button.className}.`;
    playRound(compChoice, button.className);
    isWinner();
}));










/* quick test 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
/*
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

    //console.log(`Computer: ${computerRounds} Human: ${playerRounds}`);
    if (playerRounds > computerRounds) console.log("You win! Good Job!!!!")
    else if (computerRounds > playerRounds) console.log('You is a loser lolololololol');
    else console.log("you tied which is pretty much a loss lololololo!!!");
}
//game();
*/