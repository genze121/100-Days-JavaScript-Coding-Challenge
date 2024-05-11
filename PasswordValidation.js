//* ________________________________________________________________________
//* Programming Question : Password Validation Challenge.
//* ________________________________________________________________________

//? Write a function validatePassword that checks if a given passeord string meets the following criteria:-

//? Minimum Length : The password must be atleast 8 characters long.
//! Case requirements : The password must include atleast one uppercase letter and atleast one lowercase letter.
//! Numerical requirements : The password must contain atleast one digit.
//! Special Character requirements : The password must have at least one special character from the set !@#$%^&*()-_+=.

//! Requirements
//? The function should return true if the password meets all the criteria, and false otherwise.
//? You are to implement this function using JavaScript.

function validatePassword(password) {
  const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regEx.test(password);
}

console.log(validatePassword("Pass123!"));
console.log(validatePassword("password"));
console.log(validatePassword("123456"));
console.log(validatePassword("P@ssw0rd"));