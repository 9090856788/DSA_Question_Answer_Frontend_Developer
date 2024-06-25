// Q - Find the Sum of Digit of a Number.
const SumOfDigit = (num) => {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
};

let ans = SumOfDigit(67);
console.log(ans);
