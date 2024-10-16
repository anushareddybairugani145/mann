/*const car = new Object({
    name:"tvs",
    rating:5,
    colour:"Black"
});
console.log(car); //{name: 'tvs', rating: 5, colour: 'Black'}

car.start = function(){      // defined function then we acessined start() method
    console.log("first method of car");
}
car.start();  //first method of car
console.log(car); // {name: 'tvs', rating: 5, colour: 'Black', start: ƒ}*/


/*instead of acessing */
const car = new Object({
    name:"tvs",
    rating:5,
    colour:"Black",
    break: function(){
        console.log("first method of car");
    }
    ,
    drive() {
        console.log("second method of car");
    }
});
console.log(car); //{name: 'tvs', rating: 5, colour: 'Black'}

function start(){
    console.log("first method of car");
};
car.start=start;
car.start();

console.log(car);