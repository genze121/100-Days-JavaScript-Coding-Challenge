//* ________________________________________________________
//* Programming Question : Calculate the mode.
//* ________________________________________________________

//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

//! Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).

function findMode(array) {
  let counts = {};
  let maxNum = 0;
  let mode = 0;
  for (let element of array) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }

  return mode;
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2]));
