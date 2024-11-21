function add(a,b,...rest){
    console.log(rest);
    return a+b;
}
console.log(add(200,30,40,50,60,70,80,90,100));