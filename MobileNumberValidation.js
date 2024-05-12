//* ________________________________________________________________________
//* Programming Question : Mobile Number Validation Challenge.
//* ________________________________________________________________________

//? Write a function validateMobileNumber that takes a string as input and returns true if the string represents a valid Indian mobile number, and false otherwise.

//! Validation Requirements :

//! Length : An Indian mobile number should have exactly 10 digits.
//! Starting Digit : The number must start with 6,7,8, or 9 which are valid starting digits for Indian mobile numbers.

function validateMobileNumber(mobileNumber) {
  const regExpression = /^[6-9][\d]{9}$/;
  return regExpression.test(mobileNumber);
}

console.log(validateMobileNumber("9876543210"));
console.log(validateMobileNumber("0876543219"));
console.log(validateMobileNumber("087654329"));
console.log(validateMobileNumber("0876543292335"));
console.log(validateMobileNumber("6789543210"));
