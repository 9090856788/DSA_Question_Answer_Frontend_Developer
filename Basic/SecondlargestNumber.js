// Find the 2nd Largest element in a given Array

let arrVal = [1,2,3,4,5,6,7,9,6,4,3,3,6,6,8,99,6,3,3,2,6,7,8,9,76,4,3,2,13,4];

// use Built-in Methods

// function SecondLargest(arr) {
// let unique = [...new Set(arr)];
// console.log(unique);
// let sortedArr = unique.sort((a,b) => b-a);
// console.log(sortedArr[1]);

// }
// SecondLargest(arrVal);

// function SecondLargest(arr) {
// let uniqueArr = [];
// for(let i = 0; i<arr.length; i++) {
// let isDuplicate = false;
// for(let j = 0; j<uniqueArr.length; j++) {
// if(arr[i] === uniqueArr[j]) {
// isDuplicate = true;
// break;
// }
// }
// if(!isDuplicate) {
// uniqueArr.push(arr[i]);
// }
// }
// console.log(uniqueArr);
// let sortedArr = uniqueArr.sort((a,b) => b-a);
// console.log(sortedArr[1]);
// }

// SecondLargest(arrVal);