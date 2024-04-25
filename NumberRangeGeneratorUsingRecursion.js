//* _______________________________________________________________
//* Programming Question : Number Range Generator using recursion.
//* _______________________________________________________________

//? Write a recursive function called numberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:

//? a: An integer representing the starting number of range.
//? b: An integer representing the ending number of range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:

//? An array containing consecutive numbers from a to b (inclusive).

//! Constraints:

//? a and b will be integers.
//? a will be less than or equal to b.

function numberRangeRecursive(a, b, arr = []) {
  if (a > b) return arr; // base - case
  arr.push(a);
  return numberRangeRecursive(a + 1, b, arr);
}

console.log(numberRangeRecursive(0, 5));
console.log(numberRangeRecursive(3, 7));
console.log(numberRangeRecursive(-2, 2));
