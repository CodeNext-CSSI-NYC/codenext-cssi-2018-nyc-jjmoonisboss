let compChoice;
var readline = require("readline-sync");
let userChoice = readline.question("Pick rock, paper or scissors: ");
const compNum = Math.random() * 3;
if (0 < compNum && compNum < 1) {
  compChoice = "rock";
} else if (1 < compNum && compNum < 2) {
  compChoice = "paper";
} else if (2 < compNum && compNum < 3) {
  compChoice = "scissors";
}
if (compChoice == "rock" && userChoice == "paper" || compChoice == "paper" && userChoice == "scissors" || compChoice == "scissors" && userChoice == "rock") {
  console.log("You got " + userChoice + " and the computer got " + compChoice + " so HUMAN wins so yay!!!");
} else if (compChoice == "paper" && userChoice == "rock" || compChoice == "scissors" && userChoice == "paper" || compChoice == "rock" && userChoice == "scissors") {
  console.log("You got " + userChoice + " and the computer got " + compChoice + " so COMPUTER wins!, sorry human!");
} else if (compChoice == userChoice) {
  console.log("Its a Tie!");
}