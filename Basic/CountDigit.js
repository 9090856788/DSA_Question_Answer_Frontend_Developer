// Q - Find the count of Digit of a Number.
const CountDigit = (num) => {
  let count = 0;
  num = Math.abs(num); //Always take +ve number not -ve

  do {
    num = Math.floor(num / 10);
    count++;
  } while (num > 0);
  return count;
};
let ans = CountDigit(987654);
console.log("The count digit of the number is: ", ans);
