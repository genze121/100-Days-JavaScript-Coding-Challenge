//* ________________________________________________________________________
//* Programming Question : FizzBuzz Challenge.
//* ________________________________________________________________________

//? Write a function fizzbuzz that accepts two numbers, startnum and endnum as input. The function should return an array containing numbers and specific strings based on the following rules:

//? For each number i in the range from startnum to endnum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise include the number itself.

// 1st approach
function fizzBuzz(startnum, endnum) {
  let arr = [];
  for (let i = startnum; i <= endnum; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

// 2nd approach
function fizzBuzz(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(
      i % 3 == 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
    );
  }

  return arr;
}

console.log(fizzBuzz(1, 15));
