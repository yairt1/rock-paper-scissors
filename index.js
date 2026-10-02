const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const DRAW = 0;
const oneWon = 1;
const twoWon = 2;
const GAME_ROUNDS = 5;

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
  console.log(
    `Your choice: ${humanChoice}, Computer choice: ${computerChoice}`,
  );

  const outcome = gameRules(humanChoice, computerChoice);

  switch (outcome) {
    case oneWon: {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    }
    case twoWon: {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      break;
    }
    default: {
      console.log("Draw, same choice");
    }
  }
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
  for (let i = 0; i < GAME_ROUNDS; i++) {
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

playGame();
