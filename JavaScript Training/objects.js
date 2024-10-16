/*method of defining an object 
1) with object literal*/
const Person = {
    firstName:"Anusha",
    lastName:"Bairugani",
    age:22,
    tone:"fair"
};
console.log(Person);
// 2) with new word or object constructor
/*const employee = new Object({
     firstName:"ansuha",
     surname:"bairugani",
     role:"sde"
});
console.log(employee);*/
//cred operation
//Acessing Property with dot notation
/*const employee = new Object({
    firstName:"Anusha",
    age:22,
    role:"sde"
});
console.log(employee.age);*/

//Acessing Property with Array-notation ['age']
/*const employee = new Object({
    firstName:"Anusha",
    age:22,
    role:"sde"
});
console.log(employee["age"]);*/

//acessing via array notation bcoz it contains space between 'building no' like 4-33-1-1

const address = new Object({
    country:"india",
    state:"Andhrapradesh",
    city:"madanapalle",
    streetName:"Marpuristreet",
    pinNum:517325,
    'doorNumber':"4-33-1-1"
});
console.log(address['doorNumber']); // here without array notation with dot notation also getting output console.log(adress.doorNumber)

//acessing the property that is not defined for an object gives us undefined.
console.log(address.satecode);

//replace the value of a property
address.state ="Karanataka",
console.log(address);

//adding the value of a property

address.statecode = "2",
console.log(address.statecode);

//delect a property of an object

delete address.statecode,
console.log(address.statecode); //undefined

//checking if property exists -->boolean values 

console.log('satecode' in address); //false - does not exists

console.log('city' in address); //true -exists