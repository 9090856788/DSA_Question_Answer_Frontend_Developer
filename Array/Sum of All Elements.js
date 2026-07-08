// You are given an array of integers. Return the sum of all the elements in the array.

// Example 1
// Input

// [2,4,6,8]

// Output

// 20

// Example 2
// Input

// [5]

// Output

// 5

// Example 3
// Input

// []

// Output

// 0

// Constraints
// Array length: 0 to 100000
// Elements may be negative.

let integerArr = [10, 20, 30, 40, 50];

function SumOfAllElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
SumOfAllElements(integerArr);

// Pattern - Traversal
// Time complexity - O(n)
