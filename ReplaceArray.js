//* _________________________________________________________________
//* Programming Question : Replace array elements.
//* _________________________________________________________________

//? Create a function replaceArray that takes an arr as input.
//? Replace the element at index 2 with "javascript"

// Approach - 1
function replaceArray(arr) {
  return arr.with(2, "javascript");
}

// Approach - 2
function replaceArray(arr) {
  return arr.map((element, index) => (index === 2 ? "javascript" : element));
}

console.log(replaceArray(["html", "css", "java"]));
