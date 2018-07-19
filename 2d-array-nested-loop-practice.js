// 1. Refer to the 2D array below to answer the questions that follow
let fruits = [
  ["apple", "banana", "grape"],
  ["peach", "raspberry", "papaya"],
  ["apricot", "cherry", "pineapple"],
  ["watermelon", "nectarine", "tangerine"],
  ["mango", "strawberry", "blueberry"]
];
// Which item is fruit[2][1]? Confirm your answer by printing it out.
// Which are the row/column coordinates of tangerine? Confirm your answer by printing it out.
// Change apricot to kiwi. Print out the array to make sure it worked.
// Create a new row to add to the end of the 2D array.
// This row will itself by an array and should contain blackberry, lemon, and clementine.
// Add it to the end of the fruits array. Print out the whole array to make sure
// your new row looks just like any other row.
// What is the row/column of lemon? Print it out to make sure.

// console.log(fruits[2][1]);
// fruits.push(["blackberry", "lemon", "clementine"]);
// console.log(fruits);
// console.log(fruits[5][1]);

// fruits.length
// fruits[0].length (tells you the length of the row / this is for col)

// 2. Write two nested for loops. The first (outer) should run 4 times and
// the second (inner) should run 7 times.
// Inside the inner loop, print out the sentence:
// Right now, i is _____ and j is ____, filling in the blanks with the values.
// Before you run it, predict what the second line that your code prints will be.
// Write it down.... Now run it. Is it what you predicted?

// for (let row = 0; row < 4; row++) {
//   for (let col = 0; col < 7; col++) {
//     console.log("Right now, i is " + row + " and j is " + col);
//   }
//   //yes it is what i predicted
// }


// 3. Use two nested loops to iterate (go through) the fruits array above.
// Inside the loops, print out the item at that particular row/column.
// Which item do you think will be printed second-to-last? Run the code to check.
// for (let row = 0; row < fruits.length; row++) {
//   for (let col = 0; col < fruits[0].length; col++) {
//     console.log(fruits[row][col]);
//   }
//
// }
//



// 4. Create your own 2D array. It doesn't have to be too big, but it should
// have at least two rows and at least two columns, and at least 6 items overall.
// Print out a few values from your 2D array using the rol/column indexes.
// Make sure that what gets printed matches your expectations.
// Try changing a few values in the 2D array using row/column indexes.
// Print it out to make sure that your changes worked as intended.

let chara = [
  ["Julia", "Zach", "Lola"],
  ["Chikako", "Makoto", "Aki"],
  ["Jacey", "Fern", "Queen"],
  ["Package", "Dwarf", "Hearts"],
  ["Lily", "Red", "Ami"]
];
//calling characters
console.log(chara[3][2]);
console.log(chara[2][0]);
console.log(chara[1][2]);
console.log(chara[4][2]);
console.log(chara[4][0]);
//changing/adding characters
chara[4][1] = "Poca";
chara[0][3] = "Zach's Dad??";
chara[2][3] = "Prince";
chara[0][4] = "Zach's uncle";
console.log(chara[4][1]);
console.log(chara[0][3]);
console.log(chara[2][3]);
console.log(chara[0][4]);

// 5. Write a function that takes in a 2D - array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including case with fruits that are there
// and other cases with fruits that are not.

function twoDTaker() {
  let emptArr = [];
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let findString = 0;
    for (let j = 0; j < fruit.length; j++) {
      if (fruit.includes("e") || fruit.includes("a")) {
        emptArr.push(fruit);
        findString++;
      }
      console.log(findString);
    }
    if (findString >= 2) {
      emptArr.push(fruit);
    }
  }
  console.log(emptArr);
}
twoDTaker();