// Given an array of integers, return the number of odd elements.

// Example

// Input

// [1,3,5,6,8]

// Output

// 3

let integerArray = [1, 3, 5, 6, 8];

function countOddNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  console.log(count);
}
countOddNumbers(integerArray);
