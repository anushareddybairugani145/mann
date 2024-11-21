function generateFibonacci(n) {
    let fibSeries = [0,1];
    for (let i=2; i < n; i++) {
         //generating Fibonacci Series upto 'n terms  
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.reverse();
}

const numTerms = 10;
const reversedFibonacci = generateFibonacci(numTerms);

console.log("Reversed Fibonacci Series:", reversedFibonacci);