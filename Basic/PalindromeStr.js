// write a javascript function to check given string is palindrome or not.

const StrPalindrome = (str) => {
    // reverse the string.
    let reverse = str.split("").reverse().join("");
    if(str === reverse) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not Palindrome");
    }
    
}
StrPalindrome("Kanhu");