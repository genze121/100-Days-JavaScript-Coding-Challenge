//* ____________________________________________________________
//* Programming Question : Character is Uppercase or Lowercase
//* ____________________________________________________________

//? Write a function to check if a character is uppercase or lowercase.

//! Constraints:

//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

//! Note:

//? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
//? Optimize the function to handle edge cases effitively.

// 1st way using toUpperCase() and toLowerCase() function.
function isUpperLowerCase(char) {
  return char.toUpperCase() === char;
}

// 2nd way using ASCII value.
function isUpperLowerCase(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
}

console.log(isUpperLowerCase("S"));
console.log(isUpperLowerCase("t"));
