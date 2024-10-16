//console.log(test);
//var test = 500; //output undefined

//redeclaring the global block 
//var test1 = 50; //global var 
//var test1 = 100;
//console.log(test1); // output :100 because redeclared value 


//var age = 20; //orginal //global var
//function foo(){
//    var age = 400; //function scope
//  console.log(age);
//}
//foo(); // global to function scope output:400
//console.log(age); //global var output:20

//'use strict' //if we remove will get output
var test = 20;
delete test;
console.log(test); //unqualifed identifier in strict mode


