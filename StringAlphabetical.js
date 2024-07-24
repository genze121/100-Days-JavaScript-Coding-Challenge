//* _________________________________________________________________
//* Programming Question : String Alphabetical programming.
//* _________________________________________________________________

//? Create a function stringAlphabeticalOrder that takes an str as input.
//? The function should return the string in alphabetical order.

function stringAlphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(stringAlphabeticalOrder("apple"));
console.log(stringAlphabeticalOrder("javascript"));
