// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//
// Examples:


function makeAbba(a, b) {
  return a + b + b + a;
}

// makeAbba("Hi", "Bye"); //→ "HiByeByeHi";
console.log(makeAbba("Hi", "Bye"));
// makeAbba("Yo", "Alice") ;//→ "YoAliceAliceYo";
console.log(makeAbba("Yo", "Alice"));
// makeAbba("What", "Up"); //→ "WhatUpUpWhat" ;
console.log(makeAbba("What", "Up"));



// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
//
// // Examples:
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"
function comboString(c, d) {
  if (c.length > d.length) {
    return d + c + d;
  } else if (d.length > c.length) {
    return c + d + c;
  }
}

console.log(comboString("Hello", "hi"));
console.log(comboString("hi", "Hello"));
console.log(comboString("aaa", "b"));


// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.

// Examples:
// lastTwo("coding") → "codign"
// lastTwo("ab") → "ba"
// lastTwo("a") → "a"

function lastTwo(str) {
  let end = str.charAt(str.length - 1);
  let mid = str.charAt(str.length - 2);
  let beg = str.substring(0, str.length - );

  if (str.length < 2) {
    return str;
  } else if (str.length == 2) {
    return end + beg;
  } else {
    return beg + end + mid;
  }


}