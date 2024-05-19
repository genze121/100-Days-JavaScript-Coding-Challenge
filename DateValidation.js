//* ________________________________________________________________________
//* Programming Question : Date Validation.
//* ________________________________________________________________________

//? Write a function named isValidateDate that takes a single string input representing a date and determines if it is a valid date in the format MM/DD/YYYY. The valid date range should be from January 1, 1990 to Decemeber 31,2099.

// todo Requirements:
//* Format Check : The date must strictly follow the MM/DD/YYYY format. Ensure that slashes(/) are used as separators.
//? Month Validation : Valid months are from 01 (January) to 12 (December).
//? Date Validation : Days should be valid according to the month.
//? 01-31 for January, March, May, July, August, October, December.
//? 01-30 for April, June, September, November.
//? 01-28 for February in common years, and 01-29 for february in leap years.
//? Year Validation : Years should be within the range from 1990 to 2099.

// Date Validation
function isValidateDate(dateFormat) {
  const regularExpression = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/;
  return regularExpression.test(dateFormat);
}

console.log(isValidateDate("12/15/2021"));
console.log(isValidateDate("02/29/2021"));
console.log(isValidateDate("04/31/2020"));
console.log(isValidateDate("01/01/1800"));
console.log(isValidateDate("13/01/2000"));
console.log(isValidateDate("12/31/2099"));
