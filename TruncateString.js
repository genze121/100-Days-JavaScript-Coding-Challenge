//* __________________________________________________________
//* Programming Question : Truncate a string.
//* __________________________________________________________

//? Write a function called truncatingString that takes two parameters.

//* str : A string that needs to be truncated.
//* maxLength : An integer representing the maximum length of the string allowed.
//* The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the truncated string.

//! Constraints:

//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxLength + 3 characters due to the addition of '....

// 1st way without using ternary operator.
function truncatingString(str, count) {
  if (count <= 0) return str;
  if (str.length > count) {
    return str.slice(0, count).concat("...");
  }
}

// 2nd way using ternary operator.
function truncatingString(str, count) {
  return count <= 0 ? str : str.slice(0, count).concat("...");
}

// 3rd approach using substring() function.
function truncatingString(str, count) {
  return count <= 0 ? str : str.substring(0, count).concat("...");
}

console.log(truncatingString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncatingString("A-tisket a-tasket A green and yellow basket", 0));
