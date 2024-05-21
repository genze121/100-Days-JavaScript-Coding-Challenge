//* ___________________________________________________
//* Programming Question : Email Address Validation.
//* ___________________________________________________

//? You are tasked with implementing a function to validate email addresses using a regular expression. Write a function validateEmail(email) that takes a string email as input and returns true if the email address is valid according to the following rules:

// todo 1 :- The local part of the email address (before the "@") can contain:
//? Alphanumeric characters : (A-Z, a-z, 0-9).
//? Special Characters : period ".", underscore "_", percent "%", plus "+", hyphen "-".
//? Consecutive periods are not allowed.
//? Special characters cannot appear at the beginning or end of the local part.

// todo 2 :- The domain part of the email address (after "@") can contain :
//?  Alphanumeric characters : (A-Z, a-z, 0-9).
//? Hyphen "-"
//? Period "."
//? Must contain at least one period
//? The top-level domain (TLD) must consist of at least two alphanumeric characters (e.g., "com", "org", "net", "etc.")

function validateEmail(email) {
  const regularExpression = /^[A-Za-z\d]+(?:[.%_+][A-Za-z\d]+)*@[A-Za-z\d]+\.[A-Za-z\d]{2,}$/;
  return regularExpression.test(email);
}

console.log(validateEmail("john.doe@example.com"));
console.log(validateEmail("invalid..dot@domain.com"));
console.log(validateEmail("missing@dotcom"));
console.log(validateEmail("no@domain"));
