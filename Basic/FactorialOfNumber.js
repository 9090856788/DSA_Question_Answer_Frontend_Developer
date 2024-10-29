//Write a JavaScript program to calculate the factorial of a given number.
const FactorialNum = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * FactorialNum(num - 1);
  }
};
let res = FactorialNum(5);
console.log(res);
