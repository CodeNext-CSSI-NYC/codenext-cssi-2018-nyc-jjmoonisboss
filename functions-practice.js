//Jelyse Williams
// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function makeNoise(){
  console.log("meow!");
}
// // 1b. Call it three times in a row. Run your code to make sure it works.
makeNoise();
makeNoise();
makeNoise();
// // 2a. Write (declare) a function that takes one parameter and prints out the square of that number
function wowWe(num2){
   let wooHoo =  num2 ** 2;
      console.log(wooHoo);
}
// // 2b. Call it three times with three different parameters. Run your code to make sure it works.
wowWe(2);
wowWe(3);
wowWe(5);
// // 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function heyYo(num1,num3){
  const readline = require("readline-sync");
     if (num1 > num3){
       console.log(num1 + " is greater than " + num3);
     }else if (num1==num3){
       console.log(num1 + " and " + num3 + " are equal!!");
     }else{
       console.log(num3 + " is greater than " + num1);
     }
}
// // 3b. Call it three times with three different parameters
// // Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// // Run your code to make sure it works.
heyYo(8,4);
heyYo(9,7);
heyYo(4,4);
// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function spongebob (name){

  return "Hello " + name
}
// // 4b. Call the function and store the result in a variable. Then, print out that variable.
// // Repeat this three times with different names.
let pineapple = spongebob("Squidward!");
 console.log(pineapple);
let apple = spongebob("Patrick!");
 console.log(apple);
let pine = spongebob("Gary!");
 console.log(pine);
// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function heyNow(num4,num5){
  return (num4 + num5) /2
}
// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
console.log("The average of 4 and 5 is " + heyNow(4,5)  );
// you cant put things in sentences and stuff if its in a function to make it work declare it and call it in the sentence i.e : let num1 = 8;
console.log("The average of 8 and 4 is is " + heyNow(8,4)  );
console.log("The average of 9 and 7 is is " + heyNow(9,7)  );
console.log("The average of 4 and 4 is is " + heyNow(4,4)  );
// heyNow(8,4);
// heyNow(9,7);
// heyNow(4,4);
