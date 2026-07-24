// Problem  - Find Difference Between Largest and Smallest

let integerArr = [4, 5, 6, 7, 8, 20];

function findDifferenceBetweenLargestSmallest(arr) {
  if (arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return 0;
  }
  let largest = arr[0];
  let Smallest = arr[0];
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < Smallest) {
      Smallest = arr[i];
    }
  }
  diff = largest - Smallest;
  return diff;
}
let res = findDifferenceBetweenLargestSmallest(integerArr);
console.log(res);
