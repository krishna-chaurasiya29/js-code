//we will get to know about which all synatax are true and what are false

const userEmail1 =[]//get 
const userEmail2=""//didntget
const userEmail3="hello@gnail.com"//get


if(userEmail3)
{
    console.log("got user email");
}
else{
    console.log("dint get user email");
}

//here we comes to know about some truthy values and falsy vlaues
//which are predefined by the js


//falsy values are
// false ,0,-0,0n,BigInt,undefined,NaN,"" this are all falsy values

//Truthy Values

// "0", 'false' , " ",[], {},function(){}

// if(Object.keys(emptyObj).length===0){
// console.log("object is empty");
// }

//NUllish coalesing Operator (??) : null undefined

let val1=5??10  //5 will be assigned
// val1=null??10; //10 will be assigned
// val1 = undefined ?? 15  //15 will be assigned
console.log(val1);
//the value which gets first is returned
// it is used when there is call from database and comes null so instead of 
//if we have to print another value we use this