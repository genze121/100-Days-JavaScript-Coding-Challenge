//* ________________________________________________________
//* Programming Question : Triangle
//* ________________________________________________________

//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle : "equilateral","isosceles","scalene".

function checkTraingleType(a, b, c) {
  if (a === b && b === c) return "Equilateral Triangle";
  else if (a === b || b == c || c === a) return "Isosceles Triangle";
  else return "Scalene Triagle";
}

console.log(checkTraingleType(3, 3, 3));
console.log(checkTraingleType(3, 4, 3));
console.log(checkTraingleType(5, 8, 6));
