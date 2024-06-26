// Q - Write a Program to check the number is palindrome or not.
const PalindromeNumber = (num) => {
  let reverse = 0;
  let copyNum = num;
  while (copyNum > 0) {
    let reminder = copyNum % 10;
    reverse = reverse * 10 + reminder;
    copyNum = Math.floor(copyNum / 10);
  }
  if (num === reverse) {
    console.log("The Number is a Palindrome Number");
  } else {
    console.log("The Number is not a Palindrome Number");
  }
};

PalindromeNumber(545);
