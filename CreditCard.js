//* ________________________________________________________________________
//* Programming Question : Validate a Credit Card Number (Luhn Algorithm)
//* ________________________________________________________________________

//? Write a function to validate credit card numbers using Luhn Algorithm.

//! Requirements :
//* Write a function named validateCreditCard that takes a credit card as a string.
//* The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
//* Ensure the function can handle numbers as strings, which may include spaces and dashes.

//! Luhn Algorithm Steps :

//* Steps of the Luhn algorithm
// Prepare the number.
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the digits.
//? Reverse the digits of the number. For example, it becomes 31789372997.
//? Double every second digit :
//? Starting from the first digit, double every second digit.
//? For example : 3,1*2,7,8*2,9,3*2,7,2*2,9,9*2,7.
//? which translates to : 3,2,7,16,9,6,7,4,9,18,7.
//? Subtract 9 from the numbers higher than 9 :
//? If doubling the number results in a number greater than 9, subtract 9 from it.
//? Sum all digits:
//? Add all the digits together.
//? 3 + 2 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//? Check modulo 10 :
//? If the sum of modulo 10 is 0, then the number is valid according to Luhn formula.
//? 66%10 = 6, which is not 0, so 79927398713 is not a valid number according to the Luhn.

function validateCreditCard(card) {
  card = card.replace(/\D/g, "");

  // Step - 1
  let reverseNumber = "";
  for (let i = card.length - 1; i >= 0; i--) {
    reverseNumber = reverseNumber + card.charAt(i);
  }

  // Step - 2
  let doubleDigit = reverseNumber.split("").map((element, index) => {
    if (index % 2 !== 0) {
      element = element * 2;
    }

    return element;
  });

  // Step - 3
  let subtract = doubleDigit.map(element => {
    if (element > 9) {
      element = element - 9;
    }
    return element;
  });

  // Step - 4
  let digits = subtract.reduce((acc, element) => acc + Number(element), 0);

  return digits % 10 == 0 ? true : false;
}

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));
