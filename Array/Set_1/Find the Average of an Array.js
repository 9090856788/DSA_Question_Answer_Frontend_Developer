// Problem 3 – Find the Average of an Array
// Difficulty

// ⭐ Easy

// Pattern

// Array Traversal

// Problem Statement

// Given an array of integers, calculate the average of all elements.

// Return the average as a number.

// If the array is empty, return 0.

// Input
// [2,4,6,8]
// Output
// 5

let integerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findAvgArr(arr) {
    // Edge case: If the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;

    // Traverse the array and calculate the sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Calculate and return the average
    return sum / arr.length;
}

// Store the returned value
let average = findAvgArr(integerArr);

// Print the result
console.log("Average:", average);