// Q - WAP to print the Fibonacci of the given number.
const FibonacciSeries = (num) => {
  if (num < 2) {
    return num;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i < num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};
let ans = FibonacciSeries(8);
console.log("The Fibonacci Series of the number is: ", ans);
