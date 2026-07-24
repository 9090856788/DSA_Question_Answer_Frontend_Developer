// Problem 12 – Find the Second Smallest Element

let intArr = [3, 4, 6, 7, 223, 56, 78, 98, 45, 2];

function findSecondSmallestElement(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  console.log(secondSmallest);
}
findSecondSmallestElement(intArr);
