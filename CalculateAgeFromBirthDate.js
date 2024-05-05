//* _________________________________________________________________
//* Programming Question : Calculate age from the birth date.
//* _________________________________________________________________

//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthdate will be provided in the format 'YYYY-MM-DD'.

//* Requirements

//? The function must handle leap years and varying numbers of days in each month accurately.
//? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
//? The output should be the age in whole years.

function calculateAge(birth) {
  const currentDate = new Date();
  const birthDate = new Date(birth);

  const currentYear = currentDate.getFullYear();
  const birthyear = birthDate.getFullYear();

  let age = currentYear - birthyear;

  const diff = currentDate.getMonth() - birthDate.getMonth();

  if (diff < 0 || (diff === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

console.log(calculateAge("1990-05-15"));
