//Jelyse Williams
// 1a. Use a while loop to print out numbers from 1 to 10
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num += 1;
// }
// // 1b. Use a while loop to print out numbers from 30 to 15
// let nums = 30;
// while (nums >= 15) {
//   console.log(nums);
//   nums -= 1;
// }

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.
// var randomInt = require('random-int');
// // let mun = randomInt(1, 6);
// while (mun != 5) {
//   let ok = console.log(mun);
//   let fine = console.log(randomInt(1, 6));
// }
// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.
var readline = require("readline-sync");
let cool = readline.question("Guess the password: ");
//for (var guessCount= 0; guessCount > 3;  guessCount ++;) 



let passWord = "lolnope"


while (cool != passWord) {
  console.log(" nope try again");
  cool = readline.question("Guess the password: ");
}
console.log("Congrats you guessed it! How did you know? What's your secret?")


if (cool != passWord) {
  console.log(" i knew it alll along! You're a robot!! Begone!")
} else {
  console.log("Congrats you guessed it! How did you know? What's your secret?")
}
// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.