//* _________________________________________________________________________________________
//* Programming Question : Write a program to print numbers from 1 to 10 in a 1 second time
//* _________________________________________________________________________________________

//? You are required to implement a function printNumber that generates a number from 1 to 10 and print in a 1 second duration.

function printNumber() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

printNumber();
