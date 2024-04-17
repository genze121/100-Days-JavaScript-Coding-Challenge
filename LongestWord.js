//* ________________________________________________
//* Programming Question : Longest Word in a String
//* ________________________________________________

//? Q: Write a function findLongestWord that takes a string as input and returs the longest word int the string. If there are multiple longest words, return the first one encountered.

//* Constraints :
//? The input string may contain alphabetic characters, digits, spaces and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note :
//? If the input string is empty or contains only whitespae, the function should return an false.
//? The function should ignore leading and trailing whitepace when determining the longest word.

const str = "Interview preparation for faang companies";

function findLongestWord(str) {
  // Conditional check for empty string
  if (str.trim().length === 0) return "Empty String";

  let words = str.split(" ");

  // 1st approach using sort() function.
  const finalWords = words.sort((a, b) => b.length - a.length);
  console.log(finalWords[0]);

  // 2nd approach using reduce() function.
  const reduceWords = words.reduce(
    (accumulator, word) =>
      word.length > accumulator.length ? word : accumulator,
    ""
  );
  console.log(reduceWords);
}

console.log(findLongestWord(str));
