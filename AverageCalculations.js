//* ________________________________________________________
//* Programming Question : Calculate the average number
//* ________________________________________________________

//? Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

//* Your function should:

//* Accept an array of numbers as input.
//* Calculate the sum of all the numbers in the array.
//* Divide the sum by the total number of elements int the array to find the average.
//* Return the calculated average.

// 1st approach using naive solution using for loop iteration.
function calculateAverage(arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  console.log(sum);
  average = sum / arr.length;

  return average;
}

// 2nd approach using reduce() function.
function calculateAverage(arr) {
  const total = arr.reduce((acc, sum) => acc + sum, 0);
  return total / arr.length;
}

console.log(calculateAverage([5, 10, 2, 8]));
