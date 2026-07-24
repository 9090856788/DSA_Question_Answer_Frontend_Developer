// Problem - Find Maximum and Minimum Together

let integerArr = [2, 3, 45, 6, 7, 8, 9];

function findMaxMin(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return {
        max,
        min
    };
}

let res = findMaxMin(integerArr);
console.log("Maximum:", res.max);
console.log("Minimum:", res.min);