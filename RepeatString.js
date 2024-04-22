//* __________________________________________________________
//* Programming Question : Repeat a string.
//* __________________________________________________________

//? Write a function called repeatString that takes two parameters.

//* str : A string that needs to be repeated.
//* num : An integer representing the number of times the string should be repeated.
//* The function should repeat the input string str the specified number of times num and return the resulting string.

//! Constraints:

//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.

function repeatString(str, num) {
  return num > 0 ? str.repeat(num) : str;
}

console.log(repeatString("abc", 5));
console.log(repeatString("abc", 0));
