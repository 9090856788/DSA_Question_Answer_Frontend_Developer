// Given an array of integers, return:

// Number of positive values
// Number of negative values
// Number of zero values
// Example

// Input

// [-2,4,0,-5,7,0,10]

// Output

// Positive = 3
// Negative = 2
// Zero = 2

let integerArray = [-2, 4, 0, -5, 7, 0, 10];
function countPositiveNegativeZero(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log(`Positive = ${positiveCount}`);
  console.log(`Negative = ${negativeCount}`);
  console.log(`Zero = ${zeroCount}`);
}
countPositiveNegativeZero(integerArray);
