const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
  let choice = prompt("Enter rock / paper / scissors to play:");

  while (choice === null) {
    choice = prompt("Empty value! Please enter a proper value to play: ");
  }

  choice = choice.toLowerCase();

  while (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    choice = prompt(
      "Invalid value! Please enter a proper value to play: ",
    ).toLowerCase();
  }

  return choice;
}
