//Jelyse Williams
// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
  var readline = require("readline-sync");
  let hey  = 0;
  let num= readline.question("Give me a number, it can be any postive or negative: ");
  if (num < hey){
    console.log("You're answer "+ "'" + num + "'"+ " is a negative number!!");
  }
  else if (num == hey){
    console.log("You're number isssss ZEROOOOOO ");
  }
  else{
    console.log("You're answer "+"' " + num + "'"+  " is a positive number!!");
  }
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
let  nums =parseFloat(readline.question("Please enter one number here: "));
let doubleNums =parseFloat(readline.question("Please enter another number here: "));
let tripleNums =parseFloat(readline.question("Please enter one more number here: "));
if (nums > doubleNums && nums > tripleNums){
  console.log("The max number out of " + nums + ", " + doubleNums  + " and "  + tripleNums + " is " + nums + "!");
}
else if ( doubleNums > nums && doubleNums > tripleNums  ){
  console.log("The max number out of " + nums + ", " + doubleNums  + " and "  + tripleNums + " is " + doubleNums) + "!";
}

else {
  console.log("The max number out of " + nums + ", " + doubleNums  + " and "  + tripleNums + " is " + tripleNums + "!");
}
// 3. Ask the user for a number and print whether it is odd or even
let eveOh= readline.question("Give me a number, it can be any number: ");
if (eveOh %= 0) {
console.log("Your number is an even number!!")}
else if (evenOh == 0){
  console.log("You're number isssss ZEROOOOOO ");
else{
  console.log("Your number is an odd number")
}

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
// a = 0;
// b = 1;
// c = 2;
// d = 3;
let vowConst =readline.question("Enter a letter any letter (my fav is 'j' what's yours ?): ")
if (vowConst == "a"||vowConst == "e"||vowConst =="i"||vowConst =="o"||vowConst =="u"){
  console.log("Your letter is a vowellll!")
}
else if (vowConst == "y"){
  console.log("your letter is a semi-vowel! coolio <3")
}
else if (vowConst =="j"){
  console.log("10/10 consonant! best letter")
}
else if (vowConst !="a"||vowConst !="e"||vowConst !="i"||vowConst !="o"||vowConst !="u") {
  console.log("your letter is a consonant")
}

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
console.log("******************************************************************")
console.log("Welcome to the leap year discoverer!")
let daYear = readline.question("Please enter a year, any year (yes even 2016 *dun dun dun*): ");
if (daYear / 4){
  console.log(daYear +  " is a leap year<3 ")
}
else {
  console.log("Sorry " + daYear + " isn't a leap year </3")
}
console.log("******************************************************************")

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
