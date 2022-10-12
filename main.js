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
    else if (choice === 3) return "Scissors";
    else return "ERROR ON COMPUTER CHOICE";
}