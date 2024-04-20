//* ________________________________________________________
//* Programming Question : Specific Substring
//* ________________________________________________________

//? Write a function to check if a given string starts with a apecific substring.

//? str: A string (e.g, "Hello World").
//? subStr: A substring to chek if it starts with the given string(e.g, "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

function startsWith(str, substr) {
  // Way no - 1
  return str.toLowerCase().startsWith(substr.toLowerCase());

  // Way no - 2
  return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
}

console.log(startsWith("Hello World", "hello"));
console.log(startsWith("Hello World", "World"));
