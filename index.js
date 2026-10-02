function getComputerChoice() {
  const ROCK = "rock";
  const PAPER = "paper";
  const SCISSORS = "scissors";

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
