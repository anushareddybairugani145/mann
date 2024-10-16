const person = new Object({
    Name : "Anusha Reddy",
    age : 22,
    Contact :{
        Phoneno:1234567891,
        email:"anush@gmail.com",
        socialmedia:"NA"
    },
    Jobrole: {
        role: "sde",
        employeeid:1
    }
});

/*console.log(person);
console.log(person.Contact);
console.log(person.Contact.email);*/ //nested parent.nested .... and so on


var data1 = "Contact"
var data2 = "Jobrole"
console.log(person[data1]); //array notation here why we cant acess (person[data1][email])?
console.log(person.data1); // undefined for dot notation
