//* __________________________________________________________
//* Programming Question : Sum of Squares
//* __________________________________________________________

//? Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// 1st approach using naive solution.
function sumOfSquares(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}

// 2nd approach using reduce function.
function sumOfSquares(array) {
  const output = array.reduce((acc, square) => acc + square * square, 0);
  return output;
}

// 3rd approach using for - each loop.
function sumOfSquares(array) {
  let sum = 0;
  array.forEach(element => {
    sum = sum + element * element;
  });
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));
