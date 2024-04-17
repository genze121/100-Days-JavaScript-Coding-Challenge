//* ________________________________________________________
//* Programming Question : Count Occurrences of a character
//* ________________________________________________________

//! Task

//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// Todo Constraints:

//? The function should be case - sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The characters parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set)

console.log(countOccurrences("MissIssippi", "I"));

// 1st approach using reduce function.
function countOccurrences(str, character) {
  str = str.toLowerCase();
  character = character.toLowerCase();

  const counter = str.split("").reduce((accumulator, currentChar) => {
    if (currentChar === character) {
      accumulator++;
    }

    return accumulator;
  }, 0);

  return counter;
}

// 2nd approach using for-each loop.
function countOccurrences(str, character) {
  str = str.toLowerCase();
  character = character.toLowerCase();
  let counterValue = 0;
  str.split("").forEach(element => {
    if (element === character) {
      counterValue++;
    }
  });

  return counterValue;
}

//3rd approach using normal for - loop.
function countOccurrences(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  return counter;
}

// 4th approach using for - of loop.

function countOccurrences(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let counter = 0;
  for (let word of str) {
    if (word === char) {
      counter++;
    }
  }
  return counter;
}
