//* ________________________________________________
//* Programming Question : Hash Tag Generator
//* ________________________________________________

//? You are required to implement a function generateHash that generates a hash tag from a given input string.The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated has tag prefixed with #.

//* Write a  function generateHash() to accomplish this task.

const generateName = "my name is javascript";

generateHash(generateName);

function generateHash(name) {
  if (name.length > 280 || name === "" || name.trim().length === 0)
    return false;

  const words = name.split(" ");

  // 1st approach using map function.
  let capitalizewords = words.map(
    word => word[0].toUpperCase() + word.slice(1)
  );

  let joinWithHash = `#${capitalizewords.join("")}`;
  console.log(joinWithHash);

  //2nd approach using map and replace function.
  let capitalizedWords = words.map(
    word => word.replace(word[0], word[0].toUpperCase()) // way no - 1
    //   word.charAt(0).toUpperCase() + word.slice(1) // way no -2
  );

  let joinWithHash2 = `#${capitalizedWords.join("")}`;
  console.log(joinWithHash2);
}
