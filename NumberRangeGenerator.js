//* __________________________________________________________
//* Programming Question : Number Range Generator.
//* __________________________________________________________

//? Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:

//? a: An integer representing the starting number of range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:

//? An array containing consecutive numbers from a to b (inclusive).

//! Constraints:

//? a and b will be integers.
//? a will be less than or equal to b.

// 1st approach using for - loop.
function numberRangeGenerator(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

// 2nd approach using while - loop.
function numberRangeGenerator(start, end, arr = []) {
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
}

console.log(numberRangeGenerator(0, 5));
console.log(numberRangeGenerator(3, 7));
console.log(numberRangeGenerator(-2, 2));
