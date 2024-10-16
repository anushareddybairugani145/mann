/*example :1 of assining new value to const*/
//x=25;
//console.log(x); //value with only const x=25 output:25 
                //if we reassining the value fo ex:x=55; then it throwa error bcoz its is not in the block

/*exapmle :2 Block Scope- const*/                
const x= 55;//global scope
{
   const x=25;
   console.log(x);//block scope
   {
    const x=69;
    console.log(x);//inner-1 loop
   }
   {
    const x=89;
    console.log(x);//inner-2 loop
   }
}
console.log(x); // output :25,69,89,55

//const x;
//console.log(x); // (assining and declare in one vairable)const can not be hoisted. same as let. only hoisting in var. ex: x=25; console.log(x)