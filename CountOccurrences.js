//* ________________________________________________________
//* Programming Question : Count Occurrences in an array.
//* ________________________________________________________

//? Write a function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

//* Here's what the function  should do:

//* Accept an array of numbers as input.
//* Create an empty object called counts to store the counts of each element.
//* Iterate through each number in the array.
//* For each number, increment the count in the counts object.
//* If the count for a number does not exists yet, initialize it to 1.
//* Return the counts object containing the counts of each element.

function countOccurrences(array) {
  let counts = {};
  for (let element of array) {
    counts[element] = (counts[element] || 0) + 1;
  }
  return counts;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 4, 2]));
