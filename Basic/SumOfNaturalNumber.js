// Q - Write a program to calculate sum of all natural number from 1 to n.
const SumOfNaturalNumber = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log("Sum of Natural Number is : ", sum);
};
SumOfNaturalNumber(5);
