//* ________________________________________________________
//* Programming Question : Count the digits of a number.
//* ________________________________________________________

//? Write a function countDigits to count the digits of a number.

function countDigits(num) {
  let counter = 0;
  while (num != 0) {
    counter++;
    num = parseInt(num / 10);
  }
  return counter;
}

console.log(countDigits(123));
