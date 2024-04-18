//* ________________________________________________________
//* Programming Question : Max Element from Array
//* ________________________________________________________

//? Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// 1st approach using for loop iteration.
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      arr[max] = arr[i];
    }
  }
  return arr[max];
}

// 2nd approach using Math.max() function
const findMax = arr => {
  return Math.max(...arr); // spread operator to convert into number.
};

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -2]));
console.log(findMax([5]));
