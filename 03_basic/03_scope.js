if(true)
{
    const username="krishna"
    if(username ==="krishna");
    {
        const website ="youtube"
        console.log(username + website);
    }
        // console.log(website);// not accessible

}
// console.log(username); //not accessible

//conslole.log(username); not accessible 


//**************INERESTING THINGS************ */

console.log(addOne(5));
function addOne(num) {
    return num+1;
}
//heree it will not show any error because we are just decalring the function
addTwo(4)//here it will show error as its not only declaring the error but it is also storing in some varibale
//two save from error we have to write it down of the fuction
const addTwo =function(num){
    return num+2;
}


//this is the hoisting