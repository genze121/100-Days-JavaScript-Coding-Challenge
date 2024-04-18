//* ________________________________________________________
//* Programming Question : Sort an array
//* ________________________________________________________

//? Write a function to sort an array of numbers in an ascending order.

//todo Requirements:

//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method

const arr = [1, 5, 3, 2, 4];

console.log(sortArray(arr));

// 1st approach using sort with comparator function
function sortArray(arr) {
  return arr.sort((a, b) => a - b); // (a-b) is used to sort from asc to desc, (b-a) is used to sort from desc to asc.
}

//2nd approach using for loop.
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
