//* _________________________________________________________________
//* Programming Question : Simple Bar Chart from Array Data.
//* _________________________________________________________________

//? Write a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

// Approach - 1 using map and join functions.
function generateBarChart(arr) {
  const newArr = arr.map((element, index) => {
    let star = "";
    let number = 0;
    while (number < element) {
      star += "*";
      number++;
    }

    return `${index + 1} : ${star}`;
  });

  return newArr.join("\n");
}

function generateBarChart(arr) {
  return arr
    .map((element, index) => {
      return `${index + 1} : ${"*".repeat(element)}`;
    })
    .join("\n");
}

console.log(generateBarChart([5, 3, 9, 2]));
