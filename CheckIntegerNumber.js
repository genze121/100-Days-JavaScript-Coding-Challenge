//* _________________________________________________________________
//* Programming Question : Check whether it is an integer or not.
//* _________________________________________________________________

//? Create a function checkInteger that takes a number as input and check the input is integer or not.
//? If it is an integer return "Integer"
//? If it is not an integer return "Not Integer"

function checkInteger(num) {
  return Number.isInteger(num) ? "Integer" : "Not Integer";
}

function checkInteger(num) {
  return num % 1 === 0 ? "Intger" : "Not Integer";
}

console.log(checkInteger(10));
console.log(checkInteger(10.2));
console.log(checkInteger(10.0));
