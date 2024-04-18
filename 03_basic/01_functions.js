//declaration of functions

function myName()
{
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}
// myName()//paranthesis is necessary to call the function else it will just as declared

function addNumbers(number1,number2)// in this we say that we are passing parameters
{
    console.log(number1+number2);
}
// addNumbers(4,7)//in this we are passing arguments we can also call values
// addNumbers(3,"a")//output would be 3a

function addTwoNumbers(a,b)
{
    let c=a+b;
    return c;
}
const result1=addNumbers(5,9);
const result2=addTwoNumbers(5,9);
console.log("result: ",result1);
console.log("result: ",result2);

//in above function if we 

//here result 1 comes undefine because we are not returning any thing and in function 2 we are returning thefore it gives values