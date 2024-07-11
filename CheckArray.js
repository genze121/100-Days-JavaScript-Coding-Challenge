//* _________________________________________________________________
//* Programming Question : Check whether it is an array or not.
//* _________________________________________________________________

//? Create a function checkArray that takes a arr as input and check the input is array or not.
//? If it is an array return "It is an array."
//? If it is not an array return "It is not an array."

function checkArray(arr) {
  return Array.isArray(arr) ? "It is an array." : "It is not an array.";
}

console.log(checkArray([]));
console.log(checkArray({}));
console.log(checkArray(10));
