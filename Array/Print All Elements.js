// You are given an array of integers. Write a function that prints every element of the array in the same order.

// Example 1
// Input

// [10, 20, 30, 40, 50]

// Output

// 10
// 20
// 30
// 40
// 50

// Example 2
// Input

// [5]

// Output

// 5

// Example 3
// Input

// []

// Output
// (No output)

// Constraints
// Array length can be from 0 to 100000
// Elements can be positive, negative or zero

let integerArr = [10, 20, 30, 40, 50];

function printArrayIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArrayIntegers(integerArr);
