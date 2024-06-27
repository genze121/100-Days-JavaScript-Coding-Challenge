//* __________________________________________________________________________________
//* Programming Question : Generating short form name, eg => Javascript Language [JL]
//* __________________________________________________________________________________

//? You are required to implement a function generateNameInShortForm that generates a name in short form from a given input string.The short name should be constructed as follows:

//? If the length of the input string is empty then return false.

//? Otherwise, the function should return the generated short formed name example:- Javascript Language as JL.

//* Write a  function generateNameInShortForm() to accomplish this task.

function generateNameInShortForm(str) {
  if (str === "" && str.length === 0) return false;
  const arr = str.split(" ");
  const nameShortForm = arr.map(element => element[0]).join("");
  return nameShortForm;
}

console.log(generateNameInShortForm("Javascript Language"));
console.log(generateNameInShortForm(""));
