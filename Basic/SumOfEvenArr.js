// Write a JavaScript function that takes an array of numbers and returns a new array with the sum of even numbers.

const EvenArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  let sumOfEvenArr = newArr.reduce((acc, curr) => acc + curr, 0);
  console.log(sumOfEvenArr);
};
EvenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 23, 56, 78, 34]);
