// Given an array of integers, return the smallest element in the array.
// Example

// Input

// [12,5,18,2,7]

// Output

// 2

let inputArray = [12, 5, 18, 2, 7];

function findSmallestElement(arr) {
  let smallestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  console.log(smallestNum);
}

findSmallestElement(inputArray);
