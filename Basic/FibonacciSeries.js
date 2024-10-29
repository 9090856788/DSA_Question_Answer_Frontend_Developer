// Q - WAP to print the Fibonacci of the given number.
const FibonacciSeries = (num) => {
  if (num < 2) {
    return num;
  }
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};
let ans = FibonacciSeries(5);
console.log("The Fibonacci Series of the number is: ", ans);
