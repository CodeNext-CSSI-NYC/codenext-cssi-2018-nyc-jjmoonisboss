// Jelyse Williams

// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
  let readline = require("readline-sync"); //you only need this line once
  let newNum = parseInt(readline.question("Enter a number please:  "));
  console.log("The square root of " + newNum +  " is " + Math.sqrt(newNum));

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
// var readline = require("readline-sync");
  let yourName = readline.question("Please enter your name: ");
  console.log("Your name has " + yourName.length + " letters!");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
   let ranWord = readline.question("Enter any word,please make it appropriate though: ");
   console.log("Your word ' " + ranWord + " ' starts with the letter "+ ranWord.charAt(0) );
// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
  let  oneNums =readline.question("Please enter one number here:");
  console.log( "The average")
