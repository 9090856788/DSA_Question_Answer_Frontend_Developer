// Given an array, return a new array with all elements in reverse order.

// Example

// Input

// [1,2,3,4,5]

// Output

// [5,4,3,2,1]

let integers = [10, 20, 30, 40, 50, 60];

// Solution 1: Using built-in reverse method
function reverseArr(arr) {
  return arr.reverse();
}

let res = reverseArr(integers);
console.log(res);

// Solution 2: Using a for loop
function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

let res = reverseArr(integers);
console.log(res);
