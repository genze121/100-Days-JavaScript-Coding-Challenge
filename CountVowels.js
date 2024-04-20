//* __________________________________________________________
//* Programming Question : Count Vowels
//* __________________________________________________________

//? Write a function that takes a string as input and returns the count of vowels in that string. consider 'a','e','i','o' and 'u' as vowels (both lowercase and uppercase).

//! Contraints:

//* The input string may contain letters in both uppercase and lowercase.
//* The output should be a non-negative integer representing the count of vowels in the input - string.

// 1st way using naive solution.
function countVowels(str) {
  if (str.trim().length === 0) return false;
  str = str.toLowerCase();

  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("Helloo world"));
console.log(countVowels("ThE quIck brOwn fOx"));
console.log(countVowels("Brrrp"));
