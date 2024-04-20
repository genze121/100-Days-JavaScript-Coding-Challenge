//* __________________________________________________________
//* Programming Question : Is Power of Two
//* __________________________________________________________

//? Write a function called isPowerOfTwo that takes an integer number as input and returns true if number is a power of two, and false otherwise.

//! Notes:

//* The input number will be a positive integer.
//* Zero(0) and negative integers are not considered powers of two.
//* The function should return true if the given number is a power of 2, and false otherwise.

// 1st approach.
// function isPowerOfTwo(num) {
//   while (num != 2) {
//     if (num % 2 != 0) return false;
//     num = num / 2;
//   }

//   return true;
// }

// 2nd approach.
function isPowerOfTwo(num) {
  let op = false;
  for (let i = 1; i <= num; i++) {
    if (num === 2 ** i) {
      op = true;
    }
  }
  return op;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));
