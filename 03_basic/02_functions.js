//This will be helped for example user purchase how many items in the cart
//and to do total we didn't have fixed no of datas
function calculateCartPrice(num1){
    return num1
}
function calculateCartPrice2(...num1){//this is called rest operator
    return num1
}
console.log(calculateCartPrice(200,300,400,900));//only 200 will be printed
console.log(calculateCartPrice2(200,300,400,900));//all will be printed
//... this is called rest operator and spread operator according to its usage
//here is called rest ff

const user ={
    username : "krishna",
    price:199,
}

function handleObject(anyobject)//any object is used to handle any object 
{
    console.log(`Username is ${user.username} and price is ${user.price}`);
}
// handleObject(user);
handleObject({
        username:"sam", 
        price:599,
    })//we can pass a complet object to in the function

    //we can pass array tooo

    const newArray=[2000,4949,4344,433322];
    function returnSecondValue(getArray){
        return getArray[1]
    }
    console.log(returnSecondValue());
    console.log(returnSecondValue([400,33,3232,233]));