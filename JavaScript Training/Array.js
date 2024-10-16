const sample = ["12","25","yoy","fyi"];
sample.length; //legthofarr=samplelength; then console.log(legthofarr);
sample.toString();

console.log(sample.length); // 4

console.log(sample.toString());  //converrts array into string

console.log(sample.at(3)); //acess element at that particular position or index
 
console.log(sample.join(":"));  //join array element into a string

sample.pop("fyi");  // delect at last follow  stack LIFO
console.log(sample);

sample.push("script"); //add at Last  follow LIFO
console.log(sample);

//sample.shift();
//console.log(sample); //removes 1st element at the begining

sample.unshift(1455);;
console.log(sample); //add at 1st element at the begining

sample[0] = "new";
console.log(sample);

