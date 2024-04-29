//* __________________________________________________________
//* Programming Question : Random Color Generator.
//* __________________________________________________________

//? Write a function called randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR , GG , BB are two - digit hexadecimal numbers representing red, green, blue components of the color respectively.

//? Your challenge is to implement ramdomHexColor function using JavaScript and ensure that it produces a valid hexadecimal color code with a length of 7 characters (including the # symbol).

//! Constraints:
//* The output color should always start with # followed by six hexadecimal characters (RRGGBB).
//* The function should not take any parameters.
//* The generated color codes should be unique and evely distributed across the entire range of possible hexadecimal color codes.

// 1st approach using for - loop and random function.
function randomHexColor() {
  let hexadecimal = "01234567890ABCDEFGHIJKLMNOPQR";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexadecimal[Math.floor(Math.random() * 16)];
  }

  return color;
}

// 2nd approach using slice, padend function.
function randomHexColor() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
}

//3rd approch using substring.
function randomHexColor() {
  return `#${Math.random().toString(16).substring(2, 8).padEnd(6, 0)}`;
}

console.log(randomHexColor());
