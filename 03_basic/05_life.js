//Immediately Invoked Fuction Expression (IIFE)



//this is used when there is fuction which should be immediately connected to the database or etc..
(function kisan ()
{
    //this is named IIFE
    console.log(`DB CONNECTED`);
})();//semicoln is necessary
//This will execute first

//global scope ka pollution ka problem sa bachna ka liya hum ye use kerta hai ki yeh immediately execute hojaye

//arrow function using immediately invoked fuction

((name)=>{
    console.log(`DB CONNECTED TWO${name}`);
})("krishna");//here is how we can pass some values inside it 
//this is unknowned IIFE