//* ________________________________________________________
//* Programming Question : Factorial Finder
//* ________________________________________________________

//? Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

//* Here are some examples of factorial calculations:

//? factorial(0) => 1
//? factorial(1) => 1
//? factorial(2) => 2
//? factorial(3) => 6
//? factorial(4) => 24
//? factorial(5) => 120
//? factorial(6) => 720

//* Your function should work for any non-negative integer

function factorial(num) {
  if (num < 0) return 1;
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(-1));
