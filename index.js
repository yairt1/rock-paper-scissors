const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const DRAW = 0;
const oneWon = 1;
const twoWon = 2;
const WINNER_SCORE = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function getHumanChoice() {
  let choice = prompt("Enter rock / paper / scissors to play: ");

  while (
    choice === null ||
    (choice.toLowerCase() !== ROCK &&
      choice.toLowerCase() !== PAPER &&
      choice.toLowerCase() !== SCISSORS)
  ) {
    choice = prompt("Invalid value! Please enter a proper value to play: ");
  }

  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  roundChoices.textContent = `Your choice: ${humanChoice}, Computer choice: ${computerChoice}`;

  const outcome = gameRules(humanChoice, computerChoice);
  let outcomeText;

  switch (outcome) {
    case oneWon: {
      outcomeText = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
      break;
    }
    case twoWon: {
      outcomeText = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      break;
    }
    default: {
      outcomeText = "Draw, same choice";
    }
  }

  roundResult.textContent = outcomeText;
}

function gameRules(player1, player2) {
  if (player1 === player2) {
    return DRAW;
  } else if (
    (player1 === ROCK && player2 === SCISSORS) ||
    (player1 === PAPER && player2 === ROCK) ||
    (player1 === SCISSORS && player2 === PAPER)
  ) {
    return oneWon;
  }

  return twoWon;
}

function playGame() {
  for (let i = 0; i < WINNER_SCORE; i++) {
    console.log(`---------------- Game ${i + 1} -------------------`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    console.log(`-------------------------------------------`);
  }

  console.log("\nGame outcome:");

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Draw");
  }
}

const options = document.querySelector("#options");
const roundChoices = document.querySelector("#round-choices");
const roundResult = document.querySelector("#round-result");
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const gameWinner = document.createElement("h1");
const resetGame = document.createElement("button");

resetGame.textContent = "Reset Game";

function game(event) {
  const choice = event.target.textContent.toLowerCase();

  if (event.target !== options) {
    playRound(choice, getComputerChoice());
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
  }

  if (humanScore === WINNER_SCORE || computerScore === WINNER_SCORE) {
    if (humanScore === WINNER_SCORE) {
      gameWinner.style.color = "green";
      gameWinner.textContent = "YOU WON THE GAME";
    } else {
      gameWinner.style.color = "red";
      gameWinner.textContent = "YOU LOST THE GAME";
    }

    roundResult.after(gameWinner);
    gameWinner.after(resetGame);

    options.removeEventListener("click", game);
  }
}

options.addEventListener("click", game);

resetGame.addEventListener("click", (event) => {
  humanScore = 0;
  computerScore = 0;
  humanScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;
  roundChoices.textContent = "";
  roundResult.textContent = "";
  gameWinner.remove();
  resetGame.remove();

  options.addEventListener("click", game);
});
