//* ___________________________________________________________
//* Programming Question : Reverse each word from the string
//* ___________________________________________________________

//? Write a function called reverseWords that takes a string as input and returns the string with each word reversed.

//* Note :
//? If the input string is empty or contains only whitespae, the function should return an false/Empty String.
//? The function should ignore leading and trailing whitepace when determining the longest word.

function reverseEachWord(str) {
  if (str.trim().length === 0) return false;
  
  let reversedStr = str.split(" ").map(word => {
    return word.split("").reverse().join("");
  });
  return reversedStr.join(" ");
}

console.log(reverseEachWord("saare jahan se acha hindustan hamara"));
