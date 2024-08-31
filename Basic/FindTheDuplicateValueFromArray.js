// WAP to find the duplicate value from an Array

let givenArray = [54, 24, 23, 4, 5, 64, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 921, 234, 66, 67, 2313, 3, 4, 5, 6, 7];

// Normal for loop method
// let uniqueArr = [];
// for (let i = 0; i < givenArray.length; i++) {
//     if (!uniqueArr.includes(givenArray[i])) {
//         uniqueArr.push(givenArray[i]);
//     }
// }

// use Set Method
// let uniqueArr = [...new Set(givenArray)];

// use Filter & indexOf Method
// let uniqueArr = givenArray.filter((value, index, self) => {
//     return self.indexOf(value) === index
// })

// Reduce Method
// let uniqueArr = givenArray.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr)
//     }
//     return acc;
// }, []);

console.log(uniqueArr);


