/*const person ={ //prototype inheritance
    name:"anusha",
    greet:function(){
        console.log("hello my name is",this.name);
    }
}
const child = Object.create(person);
child.name='child'; //test inheritance
                               
child.greet(); //inherritance happens
person.greet();*/


//clasical inherritance ES6

//Functional Inherritance

function parent(name){
    var obj={};
    obj.name=name;
    obj.sayHello=function(){
        console.log("hello my name is",this.name);
    };
    return obj;
}
function child(name,age){
    var obj=parent(name);
    obj.age=age;
    obj.sayGoodBye=function(){
        console.log("goodbye",this.name);
    };
    return obj;
}
var childobj=child('anusha',22);
childobj.sayHello();
childobj.sayGoodBye();
console.log("name",childobj.name);
console.log("age",childobj.age);