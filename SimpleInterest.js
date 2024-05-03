//* _________________________________________________________________
//* Programming Question : Simple Interest Calculator.
//* _________________________________________________________________

//? Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.

function calculateSimpleInterest(principal, time, rate) {
  return principal * time * rate / 100;
}

console.log(calculateSimpleInterest(1000, 5, 3));
console.log(calculateSimpleInterest(0, 5, 3));
console.log(calculateSimpleInterest(0, 0, 0));
