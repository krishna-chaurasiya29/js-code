//primitive data types

//7 types : stiring, Number , Boolean , Null ,undefined,symbol ,bigInt

//Reference (Non - Primitive )

//Array , Objects Functions
 const id=Symbol('123');
 const anotherId=Symbol('123');
 console.log(id === anotherId);
 


const heros =["shaktiman" , "nagraj" ,"doga"];
let myobj = {
    name : "krishna",
    age : 22
}


let myName= "krishna Chaurasiya"
let anotherName=myName;
anotherName="kisan";
console.log(myName)//here the another name changes because it gets the copy 
console.log(anotherName);


let userOne ={
    email:"krishna@gamail.com",
    upi :"user@ybl"
}
let  userTwo =userOne
userTwo.email="sonu@gmail.com"//this is because the object use the heap storage that only passes the reference
console.log(userOne);
console.log(userTwo);