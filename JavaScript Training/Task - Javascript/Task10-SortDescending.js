function sortDescending(arr) {
    return arr.sort((a,b) => b-a);
}

let numbers = [1,5,10,20,25,100,90,95,80];
let sortNumber = sortDescending(numbers);
console.log(sortNumber);