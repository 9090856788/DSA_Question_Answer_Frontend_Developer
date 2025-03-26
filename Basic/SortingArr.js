// Write a Js function to sort the array 

let num = [3,4,6,2,14,67,46,8,998];

const sortArr = (arr) => {
  for(let i = 0; i<arr.length; i++){
    for(j = 0; j<arr.length - i - 1; j++){
      if(arr[j] > arr[j+1]){
        arr[j], arr[j+1] = arr[j+1], [arr[j]]
      }
    }
  }
  console.log(arr);
}
sortArr(num);