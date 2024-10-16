/*function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3));*/

function curriedFunction(a){ //b 1
    return function(b){ //c 12
        return function(c){ //abc 123
            return a+b+c;
        }
    }
}
console.log(curriedFunction(1)(2)(3));