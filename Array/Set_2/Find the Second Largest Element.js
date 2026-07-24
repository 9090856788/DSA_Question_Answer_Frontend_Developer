// Find the Second Largest Element;
// Example 1

// Input

// [10, 5, 20, 8, 15]

// Output

// 15
// Example 2

// Input

// [5,5,5]

// Output

// -1

let intArr = [3, 5, 7, 9, 4, 6, 8, 15];

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}
findSecondLargest(intArr);

// Time Complexity = O(n);
// SPace Complexity = O(1);
