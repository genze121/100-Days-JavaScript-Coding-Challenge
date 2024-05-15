//* ________________________________________________________________________
//* Programming Question : Validate Hex Color Code.
//* ________________________________________________________________________

//? Write a regular expression to validate hex color code (eg => #a3c113).

//! Requirements :
//? The hex color code should start with "#".
//? It should be followed by either 3 or 6 hexadecimal characters.

//! Use Cases :
//? Validating color codes in design tools.
//? Ensuring consistent color code format in CSS.
//? Filtering valid hex color codes in data processing.

function validateHexCode(str) {
  const regularExpression = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;
  return regularExpression.test(str);
}

console.log(validateHexCode("#a3c113"));
console.log(validateHexCode("#fff"));
console.log(validateHexCode("#1234567"));
console.log(validateHexCode("a3c113"));
console.log(validateHexCode("$g3c113"));
