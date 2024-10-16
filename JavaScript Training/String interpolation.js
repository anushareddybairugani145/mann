function person(fname, lname, holdings,){
    return ` iam ${fname}, ${lname}, holiding ${holdings} in nifty50`;
}
console.log(person("anushareddy","bairugani","sbishares")); //string interpolation ` and & normal concate + " " + soo on  


//string replace 
let str = "iam xyz";
let str2 = str.replace("xyz","Anusha")
               .replace("iam","Im");
console.log(str2);