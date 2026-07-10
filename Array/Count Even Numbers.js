// Given an array of integers, return how many even numbers are present in the array.

// Example

// Input

// [2,5,6,9,10,11]

// Output

// 3

let integerArray = [2, 5, 6, 9, 10, 11];

function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}
countEvenNumbers(integerArray);
