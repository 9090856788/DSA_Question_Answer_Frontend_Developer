// Problem  - Check the array is sorted or not
// first create a function & take arg as array
// iterate each element of the array using loop
// check a condition arr[i] > arr[i+1]
let integerArr = [4,6,3,2,8,9];

function checkSortedArr(arr){
    if(arr.length <= 1){
        return true;
    }
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
            break;
        }
    }
    return true;

}
let result = checkSortedArr(integerArr);
if(result){
    console.log("Array is sorted");
}
else{
    console.log("array is not sorted");
}