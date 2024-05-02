//* _________________________________________________________________
//* Programming Question : Convert Object to Array and Vice Versa.
//* _________________________________________________________________

//* Your task is to implement two functions:

//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key - value pairs, where each element in that array is an array with two elements: the key and the corresponding value from the object.

//? Convert Array to Object: Write a function arrayToObject that takes an array of key - value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.

//? Ensure that the conversion functions work correctly for objects with the various data types as values, such as strings, numbers and objects.

//! Constraints:

//? The input object may contain properties of any data type.
//? the input array must contain arrays with exactly two elements (key - value pairs).
//? The output object should have properties in the same order as the original object.
//? You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.

const object = {
  name: "JavaScript",
  age: 20,
  city: "Bangalore"
};

function objectToArray(obj) {
  return Object.entries(obj).flat(); // array of arrays but flat() will convert it into single array.
}

function arrayToObject(obj) {
  let arr = Object.entries(obj);
  return Object.fromEntries(arr); // convert to object
}

console.log(objectToArray(object));
console.log(arrayToObject(object));
