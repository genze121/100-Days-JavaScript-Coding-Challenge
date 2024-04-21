//* ________________________________________________________
//* Programming Question : Calculate the median.
//* ________________________________________________________

//? Write a function findMedian that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5+7)/2 = 6.

//todo tips
//* Sort the array in ascending order.
//* If the array has an odd number of elements, the median is the middle element.
//* If the array has an even number of elements, the median is the average of the two middle elements.

function calculateMedian(array) {
  const arr = array.sort((a, b) => a - b);
  let length = arr.length;

  let middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (array[middle] + array[middle - 1]) / 2;
  } else {
    return arr[middle];
  }
}

console.log(calculateMedian([5, 3, 9, 1, 7]));
console.log(calculateMedian([2, 4, 6, 8]));
console.log(calculateMedian([1, 3, 5, 7, 9, 11]));
