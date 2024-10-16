const person = new Object({
    firstName:"Anusha Reddy",
    LastName:"Bairugani",
    greet : function() {
        console.log("Wellcome");
    },
    getfullname : function() {
        console.log(this.firstName + " " + this.LastName);
    }
 });
 person.greet();
 person.getfullname();
 console.log(person);


 