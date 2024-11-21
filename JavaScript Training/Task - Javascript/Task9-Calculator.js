//ES6 

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {
    if (b===0) {
        throw new error("cannot divide by zero");
    } 
    return a/b;
};
const modulus = (a,b) => a % b;


console.log(add(10,50));
console.log(subtract(100,50));
console.log(multiply(10,50));
console.log(divide(100,50));
console.log(modulus(10,50));

