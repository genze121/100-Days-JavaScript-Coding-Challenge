//* __________________________________________________________
//* Programming Question : Remove Duplicates from an array.
//* __________________________________________________________

//? Write a function removeDuplicates that takes an array of elements as input and returns a new array with duplicate elements removed.

//? Your task is to implement the removeDuplicates function using JavaScript and ensure that the returned array contains only unique elements from the input array. The order of elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurrence of each unique element preserved.

//! Constraints:
//* The input array may contain elements of any data type.
//* The function should return a new array with duplicate elements removed, while preserving the order of elements from the original array.
//* You should use the provided removeDuplicates function signature without any additional parameters.

// 1st approach Set()
// function removeDuplicatesFromArray(array) {
//   return [...new Set(array)];
// }

// 2nd approach using loop --> for loop, forEach, map.
function removeDuplicatesFromArray(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      arr.push(array[i]);
    }
  }

  array.forEach((element, index) => {
    if (array.indexOf(element) === index) {
      arr.push(element);
    }
  });

  array.map((element, index) => {
    if (array.indexOf(element) === index) {
      arr.push(element);
    }
  });
  return arr;
}

console.log(removeDuplicatesFromArray([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 6, 5]));
console.log(removeDuplicatesFromArray(["a", "b", "c", "b", "a"]));
