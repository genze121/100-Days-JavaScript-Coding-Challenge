//* ______________________________________________________________________
//* Programming Question : Convert string into Camel case and Snake case.
//* ______________________________________________________________________

//? Write a function to convert a string to camelcase and snake case.

function toCamelCase(str) {
  return str
    .trim()
    .split(" ")
    .map((element, index) => {
      if (index === 0) {
        return element;
      } else {
        return (
          element.charAt(0).toUpperCase() + element.slice(index).toLowerCase()
        );
      }
    })
    .join("");
}

function toSnakeCase(str) {
  return str
    .trim()
    .split(" ")
    .map((element, index) => {
      if (index === 0) {
        return element;
      } else {
        return element.charAt(0) + element.slice(index);
      }
    })
    .join("_");
}

console.log(toCamelCase("hello world")); // camel case => hello World
console.log(toSnakeCase("hello world"));
