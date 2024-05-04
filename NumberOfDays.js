//* _________________________________________________________________
//* Programming Question : Number of days between two dates.
//* _________________________________________________________________

//? Write a function calculcateBetweenDates that calculates the number of days between two dates. The dates will be provided in the format 'YYYY-MM-DD'.

// Approach - 1
function calculateBetweenDates(date1, date2) {
  let dateOne = new Date(date1);
  let dateTwo = new Date(date2);

  let dateOneDay = dateOne.getDate();
  let dateTwoDay = dateTwo.getDate();

  return dateTwoDay - dateOneDay;
}

// Approach - 2 
function calculateBetweenDates(date1, date2) {
  let dateOne = new Date(date1);
  let dateTwo = new Date(date2);

  let diff = Math.abs(dateOne - dateTwo);

  return diff / (24 * 60 * 60 * 1000);
}

console.log(calculateBetweenDates("2024-01-01", "2024-01-31"));
