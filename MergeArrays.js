//* _________________________________________________________________
//* Programming Question : Merge two arrays.
//* _________________________________________________________________

//? Create a function mergeArrays that takes a arr1 & arr2 as input and returns the merged array as the output.

// Approach - 1
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Approach - 2
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
