//* __________________________________________________________
//* Programming Question : Fibonacci Series.
//* __________________________________________________________

//? Write a function to find the nth fibonacci number.

//* The fibonacci series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It start with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the fibonacci series looks like this: 0,1,1,2,3,5,8,13,21....

//todo Fibonacci number is calculated using the following  formula:
//todo syntax :- F(n) = F(n-1) + F(n-2), where F(1) = F(2) = 1.

// 1st approach using recursion.
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// 2nd approach using without recursion.
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
