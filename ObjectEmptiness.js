//* __________________________________________________________

//* Programming Question : Check Object Emptiness.
//* __________________________________________________________

//? Write a function called isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//? Your task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is empty or not.

//! Contraints:

//* The input object may have any number of properties, incuding zero.
//* The function should return a message indicating whether the object is empty or not.
//* You should use the provided isEmptyObject function signature without any additional parameters.

// 1st approach using keys
function isEmptyObject(object) {
  return Object.keys(object).length === 0
    ? "It's empty object"
    : `It's not empty object`;
}

// 2nd approach using hasOwnProperty
function isEmptyObject(obj) {
  for (let key in obj) {
    if (Object.hasOwnProperty(key)) {
      return `It's not empty object`;
    }
  }

  return `It's empty object`;
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "JavaScript" }));
console.log(isEmptyObject({ name: null }));
