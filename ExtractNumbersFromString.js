//* ________________________________________________________________________
//* Programming Question : Extract Numbers from a string.
//* ________________________________________________________________________

//? Write a regular expression to extract all numbers from a given string.

//! Requirements :
//? Extract all numbers from a given string.
//? Return all the numbers as an array.

//! Use Cases :
//? Parsing numerical data from text.
//? Extracting numeric values from calculations.
//? Filtering numbers from mixed content.

function extractNumbers(str) {
  const regularExpression = /\d+/g;
  return str.match(regularExpression);
}

console.log(extractNumbers("abc123def456"));
console.log(extractNumbers(""));
console.log(extractNumbers("100 200 and 300"));
