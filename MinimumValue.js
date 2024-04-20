//* __________________________________________________________
//* Programming Question : Find the minimum value in an array.
//* __________________________________________________________

//? Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//! Constraints:

//? The input array may contain both positive and negative numbers.
//? The input array may be empty.
//? The input array may contain duplicate values.

//! Note:

//? Ensure the function handles edge cases gracefully, such as an empty array.
//? Consider using ES6 features like the spread syntax(...) for a concise implementation.

//todo: In javascript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
//? For example :- If arr is [5,10,2,8], then ...arr expands to 5,10,2,8.

// 1st approach using naive solution.
function findMin(array) {
  if (array.length === 0) return undefined;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// 2nd approach using sort function.
function findMin(array) {
  const min = array.sort((a, b) => (b > a ? -1 : 1));
  return min[0];
}

// 3rd approach using Math function.
function findMin(array) {
  if (array.length === 0) return undefined;
  return Math.min(...array);
}

console.log(findMin([5, 10, 2, 8]));
console.log(findMin([5, -3, 0, 12, -7]));
console.log(findMin([]));
