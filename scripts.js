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

Step 5
-- Write the logic to play the entire game -- 
1. Create a new function named playGame
2. The game should last five rounds and then a winner should be declared after all rounds have been played.
    Create a loop that will let the game run for five rounds max. Once five rounds has been hit, declare a winner based on humanScore vs computerScore

*/

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let humanChoice = "";
let computerChoice = "";
let computerSelection = "";
let roundResultMsg = "";
let roundDisplay = "";

// playGame();

// EVENT LISTENERS

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
  playRound("paper");
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const playAgainBtn = document.querySelector("#resetBtn");
playAgainBtn.addEventListener("click", () => {
  playAgain();
});

// GAME FUNCTIONS

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    roundResultMsg = `Tie! Both selected: ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    roundResultMsg = `You win! Computer choice was: ${computerChoice}`;
    humanScore++;
  } else {
    roundResultMsg = `You lose! Computer choice was: ${computerChoice}`;
    computerScore++;
  }
  updateRoundCount();
  updateScore();
  updateRoundResult();

  if (humanScore === 5 || computerScore === 5) {
    disableButtons();
    const gameEnd = document.getElementById("game-result");
    if (computerScore === 5) {
      gameEnd.textContent =
        "You lose! Click the Play Again button to try again!";
    } else {
      gameEnd.textContent =
        "You win! Click the Play Again button to try again!";
    }
  }
}

function updateRoundResult() {
  const roundResult = document.getElementById("round-result");
  roundResult.textContent = `${roundResultMsg}`;
}

function updateScore() {
  const score = document.getElementById("score");
  score.textContent = `Human: ${humanScore} - Computer: ${computerScore} `;
}

function updateRoundCount() {
  roundCounter++;
  const roundDisplay = document.getElementById("round-counter");
  roundDisplay.textContent = "Rounds Complete: " + roundCounter;
}

function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

function playAgain() {
  location.reload();
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
  return computerChoice;
}
