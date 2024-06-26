// Q - WAP to print the missing number in a given Array.
const MissingNumber = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};
let ans = MissingNumber([4, 3, 2, 0]);
console.log("The Missing Number is : ", ans);
