//* ________________________________________________________
//* Programming Question : Sum of Digits
//* ________________________________________________________

//? Write a function that takes a number as input and returns the sum of its digits.

//! Contraints:

//* The input number will always be a positive integer.
//* The input number can have multiple digits.
//* The output should be the sum of all the digits in the input number.

//! Note :- This function calculates the sum of digits without converting the number to a string.

// 1st approach
function sumOfDigits(num) {
  let temp = num;
  let sum = 0;
  while (temp != 0) {
    let remainder = parseInt(temp % 10);
    sum = parseInt(sum + remainder);
    temp = parseInt(temp / 10);
  }
  return sum;
}

// 2nd approach using reduce()
function sumOfDigits(num) {
  let arr = Array.from(String(num), Number);

  return arr.reduce((acc, value) => acc + value, 0);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
