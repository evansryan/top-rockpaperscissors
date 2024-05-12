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

Step 4
-- Write the logic to play a single round -- 
1. Create a new function named playRound
2. Define two parameters for playRound(), humanChoice and computerChoice
3. Make humanSelection case-insensitive
    This was already done as part of step 2
4. Declare a winner in console.log
    Rock beats Scissors
    Paper beats Rock
    Scissors beats Paper
5. Add 1 to the winner's score
    Whicherver player wins, 1 should be added to either humanScore or computerScore

*/
let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scisscors beats paper!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose. Rock beats scissors. :(");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose. Scissors beats paper. :(");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose. Paper beats rock. :(");
        computerScore++
    }
    if (humanChoice === computerChoice) {
        console.log("Tie! Go again.");
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
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