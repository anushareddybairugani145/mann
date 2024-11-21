function removeDuplicates(arr) {
    let uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

let array = [1,1,2,2,3,3,8,8,9,9,10,10,15,1,5,15];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray);