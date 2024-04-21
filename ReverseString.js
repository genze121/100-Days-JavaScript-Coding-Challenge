//* ________________________________________________________
//* Programming Question : Reverse a string.
//* ________________________________________________________

//? Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

// 1st approach without using built-in function.
function reverseString(str) {
  if (str.trim().length === 0) return false;
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }

  return reversedString;
}

// 2nd approach using built-in-function.
function reverseString(str) {
  if (str.trim().length === 0) return false;
  return str.split("").map(element => element).reverse().join("");
}

console.log(reverseString("hello"));
