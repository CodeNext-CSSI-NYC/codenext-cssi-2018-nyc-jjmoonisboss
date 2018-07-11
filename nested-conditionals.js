//Jelyse Williams
// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.
const readline = require("readline-sync");
const frV = readline.question("Do you like fruits or vegtables? ");
if (frV == "fruit"|| frV=="fruits"|| frV=="f"){
  let aB = readline.question("A or B? ")
  if (aB== "a" ){
    console.log("******************************************************************")
    console.log("An apple a day keeps the doc.")
    console.log("******************************************************************")

  }else{
    console.log("******************************************************************")
    console.log("Yeah i like bananas, they're pretty good!")
    console.log("******************************************************************")

  }


}else if (frV=="vegtables"|| frV=="veggies"||frV=="v"||frV=="plants"){
  let mP = readline.question("M or P? ")
  if (mP== "m" ){
    console.log("******************************************************************")
    console.log("I personally dpn't like mushrooms , but you do you boo~")
    console.log("******************************************************************")

  }else{
    console.log("******************************************************************")
    console.log("Peppers are good ! i really like bell peppers in rice or eating red peppers..")
    console.log("******************************************************************")

  }

}



// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s
const sR = readline.question("square or rectangle?: ");
if (sR == "square"|| frV=="s"){
  let sQ = readline.question("alrighty then area or perimeter?: ")
  if (sQ== "a" ){
    console.log("******************************************************************")
    console.log("l x w")
    console.log("******************************************************************")

  }else{
    console.log("******************************************************************")
    console.log("s+s+s+s")
    console.log("******************************************************************")

  }


}else if (rS=="rectangle"|| rS=="r"){
  let rS = readline.question("alrighty then area or perimeter?: ")
  if (rT== "a" ){
    console.log("******************************************************************")
    console.log("l x w")
    console.log("******************************************************************")

  }else{
    console.log("******************************************************************")
    console.log("l+l+w+W")
    console.log("******************************************************************")

  }

}

// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.\

let jms = readline.question("Welcome to JJ's moon shack , how may i take your order? ")
let smj = readline.question("alrighty then would you likes a Value meal or the singles meal ")
if (smj== "value meal"|| smj== "vm"|| smj==" value please" ){
  let wow = readline.question(" Now would you like the burger or chicken?")
   if (wow== "burger"|| wow == "b"){
     console.log("Your total is $7.00")
   }else{     console.log("Your total is $6.00")}
}











}else if(mn == "singles meal"|| smj== "sm"|| smj==" singles please" )
let rS = readline.question("alrighty then area or perimeter?: ")
if (rT== "a" ){
  console.log("******************************************************************")
  console.log("l x w")
  console.log("******************************************************************")

}else{
  console.log("******************************************************************")
  console.log("l+l+w+W")
  console.log("******************************************************************")
