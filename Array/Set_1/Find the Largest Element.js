// Given an array of integers, return the largest element present in the array.

// Example 1
// Input

// [3,7,2,9,4]

// Output

// 9

// Example 2
// Input

// [-5,-2,-10,-1]

// Output

// -1

// Example 3
// Input

// [8]

// Output

// 8

// Constraints
// Array contains at least one element.

let integerArr = [3, 7, 2, 9, 4];

function FindTheLargestElement(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log("Largest number is:", largest);
}
FindTheLargestElement(integerArr);

// Pattern - Traversal
// Time complexity - O(n)