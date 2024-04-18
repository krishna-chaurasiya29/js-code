//Objects

//singleton
//object literals
const mySym1 = Symbol("key1");
const mySum2 = Symbol("key2");
const JsUser ={
    name : "krishna",
    age:18,
    "fullName":"krishna Chaurasiya",
    //we can use this method and another method as js treats objects as strings
    //but fullName cannot be accessed by dot operation 
    // there fore we have only one way to accesss is to use second method 
    mySym1 : "myKey1",
    [mySum2] : "myKey2",//The orignal format to assign the symbol is to use the brackets
   
    email:"krishna@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Tuesday"],
}
console.log(JsUser.email);//Ist Method
console.log(JsUser["email"]);//IInd Method
//There are two methods of accessing the objects
//In second method we have to use brackets and then we have to use "" this because objects treats all this as string

console.log(typeof mySym1);
console.log(typeof mySum2);

//In myKey1 many times declaring the symbol in objects does not convert in to symbol it remains in string only and many tiimes it 
//converts into object

//to change the object

JsUser.email = "krishnachaurasiya@yahoo.com";
console.log(JsUser.email)//change email will be printed
Object.freeze(JsUser);//this will freeze the object hece after this object cannot be changed

JsUser.email = "sonuchaurasiya@yahoo.com";//it reamins unchanged
console.log(JsUser.email)