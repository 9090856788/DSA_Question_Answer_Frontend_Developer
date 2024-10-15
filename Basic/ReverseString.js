// Q - WAP to reverse a string using built-in methods.

let str1 = " I am good";
let str2 = " Rama is a good boy";

const ReverseStr1 = (myStr) => {
  let output = myStr.split("").reverse().join("");
  return output;
};

let res1 = ReverseStr1(str1);
console.log(`Reverse String is : ${res1}`);

//without use any built-in methods

const ReverseStr2 = (myStr) => {
  let output = "";
  for (let i = myStr.length - 1; i >= 0; i--) {
    output += myStr[i];
  }
  return output;
};
let res2 = ReverseStr2(str2);
console.log(`Reverse String is : ${res2}`);
