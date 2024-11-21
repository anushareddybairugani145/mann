const promise = new Promise((resolve,reject)=>{
    //async opetarion 
    setTimeout(()=>{
        //resolve with sucess
        resolve("sucessfull Operation");
    },3000)
});

//handel promise
promise.then((message)=>{
    console.log(message); //sucessfull operation
})
.catch((error)=>{
    console.error(error); //handel errorr
});

//promise--- resolve----then----- output