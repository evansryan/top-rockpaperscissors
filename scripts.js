/*

I'll plan and do pseudocoding here, as per instructed.

Step 1
-- Write the logic to get the computer choice --
1. Create function named getComputerChoice
2. Return a random value of rock, paper, or scissors.
    Generate a random number 1-3 and assign each to either rock, paper, or scissors

Step 2
-- Write the logic to get the human choice --
1. Create a function named getHumanChoice
2. Ask the user to enter rock, paper, or scissors.
3. If the user enters anything other than the three options, throw an error.

Step 3
-- Declare the players score variables -- 
1. Create a variable to keep track of the human score
2. Create a variable to keep track of the computer score
3. Both scores should be 0 to start

*/
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("Computer Choice = " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper, or scissors.",).toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log("Human Choice = " + humanChoice);
        return humanChoice;
    } else {
        return getHumanChoice();
    }
}

getComputerChoice();
getHumanChoice();
