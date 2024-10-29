// write a javascript function to find the maximum number in an array.

// 1 - inbuilt method
let arr = [1, 2, 3, 4, 5, 6, 7, 854, 933, 106];

// const MaxNum = (myArr) => {
//     let max = Math.max(...myArr);
//     console.log(max);
// }
// MaxNum(arr);

// 2 - Use for loop

// const MaxNum = (myArr) => {
//     let max = myArr[0];
//     for(let i = 0; i< myArr.length; i++) {
//         if(myArr[i] > max) {
//             max = myArr[i];
//         }
//     }
//     console.log(max);
// }
// MaxNum(arr);

// 3 - Use sort method
const MaxNum = (myArr) => {
  let sortArr = myArr.sort((a, b) => b - a);
  console.log(sortArr[0]);
};
MaxNum(arr);
