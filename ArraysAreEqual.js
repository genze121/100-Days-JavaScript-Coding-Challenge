//* ________________________________________________________
//* Programming Question : Array are equal
//* ________________________________________________________

//? Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain same elements in the same order), and false otherwise.

//! Note :

//* The function should return false if the arrays have different length.

// 1st approach using length property.
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  if (arr1.length === arr2.length) {
    return true;
  }

  return arr1.length === arr2.length;
}

// 2nd approach using some() and every functions, which returns boolean value.
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.some((value, index) => value === arr2[index]);

  return arr1.every((value, index) => value === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4]));
