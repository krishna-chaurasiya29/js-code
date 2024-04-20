// In this we will learn the use of the arrow function and the use of the this operator

const user =
{
    usrename:"krishna Chaurasiya",
    price : 999,

    welcomeMessage:function() {
        console.log(`${this.usrename} , Welcome to the Website`);
        console.log(this);//this will give the complete information of the current function and all the changes applied
    }
}
// user.welcomeMessage();
// user.usrename="kishan";
// user.welcomeMessage();//heree welcome messsage changess because of using this operator
// console.log(this);
// {} is the output as it currently working in the node environment thefore it points to an empty object
// in browser it will show windows object 

const chai = function(){
    // console.log(this);
    let username ="krishna";
    console.log(this.username);//undifined is coming because of the scope
}
const chai2 =()=>{
    let username="krishna"
    console.log(username);

}

chai()
//basic of array function
// const addTwo =(num1,num2) => {
//     return num1 +num2
// }
const addTwo = (num1,num2)=> (num1 + num2)//shortcut for one line of arrow funciton
console.log(addTwo(99,1));

myArr=[1,2,34,6,6];
// myArr.foreach(function () {})
myArr.foreach(()=> {})
// myArr.foreach(() => ()) not valid