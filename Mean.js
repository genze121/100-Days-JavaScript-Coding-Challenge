//* ________________________________________________________
//* Programming Question : Calculate the mean.
//* ________________________________________________________

//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo In math, the mean is the average of set of numbers, or the numeric value that represents the center of a collection of numbers.

//! Constraints:
//* The input array may contain positive and negative intgers.
//* The input array may be empty. If it is empty, the function should return 0.

// 1st way using formula.
function calculateMean(array) {
  if (array.length === 0) return 0;
  let mean = 0;
  let frequency = 0;
  for (let i = 0; i < array.length; i++) {
    frequency = frequency + array[i];
  }
  mean = frequency / array.length;

  return mean;
}

function calculateMean(array) {
  if (array.length === 0) return 0;
  let mean = array.reduce((acc, frequency) => acc + frequency, 0);
  return mean / array.length;
}

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([10, 20, 30]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));
